// @flow
import { push } from 'connected-react-router'

import {
  getAccountDomain,
  getTokenPairsDomain,
  getAccountBalancesDomain,
  getTokenDomain,
} from '../domains'

import * as actionCreators from '../actions/marketsTable'
import * as notifierActionCreators from '../actions/app'
import { ALLOWANCE_THRESHOLD } from '../../utils/constants'

import { quoteTokenSymbols as quoteTokens } from '../../config/quotes'

import type { State, ThunkAction } from '../../types'

export default function marketsTableSelector(state: State) {
  const accountDomain = getAccountDomain(state)
  const pairsDomain = getTokenPairsDomain(state)
  const loading = pairsDomain.loading()
  const referenceCurrency = accountDomain.referenceCurrency()
  const favoriteds = pairsDomain.getFavoritePairs()
  let pairs = pairsDomain.getTokenPairsWithDataArray()

  pairs = pairs.map(tokenPair => {
    tokenPair.favorited = favoriteds.includes(tokenPair.pair)
    return tokenPair
  })

  return {
    loading,
    pairs,
    quoteTokens,
    authenticated: accountDomain.authenticated(),
    currentReferenceCurrency: referenceCurrency ? referenceCurrency.symbol : '$',
  }
}

export function redirectToTradingPage(baseTokenSymbol: string, quoteTokenSymbol: string): ThunkAction {
  return async (dispatch, getState) => {
    const param = `${baseTokenSymbol}-${quoteTokenSymbol}`
    const pair = `${baseTokenSymbol}/${quoteTokenSymbol}`

    dispatch(actionCreators.updateCurrentPair(pair))
    dispatch(push(`/trade/${param}`))
  }
}

//TODO it seems that updateAllowance callback is missing
export function toggleAllowance(symbol: string): ThunkAction {
  return async (dispatch, getState, { txProvider }) => {
    try {
      const state = getState()
      const tokens = getTokenDomain(state).bySymbol()
      const isAllowed = getAccountBalancesDomain(state).isAllowed(symbol)
      const isPending = getAccountBalancesDomain(state).isAllowancePending(symbol)
      const tokenContractAddress = tokens[symbol].address

      if (isPending) throw new Error('Trading approval pending')

      const approvalConfirmedHandler = (txConfirmed) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addSuccessNotification({ message: `${symbol} Approval Successful. You can now start trading!` }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `${symbol} Approval Failed. Please try again.` }))
      }

      const approvalRemovedHandler = (txConfirmed) => {
        txConfirmed
          ? dispatch(notifierActionCreators.addSuccessNotification({ message: `${symbol} Allowance Removal Successful.` }))
          : dispatch(notifierActionCreators.addErrorNotification({ message: `${symbol} Allowance Removal Failed. Please try again.` }))
      }

      if (isAllowed) {
        txProvider.updateExchangeAllowance(tokenContractAddress, 0, approvalRemovedHandler)
        dispatch(notifierActionCreators.addSuccessNotification({ message: `Locking ${symbol}. You will not be able to trade ${symbol} after the transaction is confirmed` }))
      } else {
        txProvider.updateExchangeAllowance(tokenContractAddress, ALLOWANCE_THRESHOLD, approvalConfirmedHandler)
        dispatch(notifierActionCreators.addSuccessNotification({ message: `Unlocking ${symbol}. You will be able to trade  ${symbol} after the transaction is confirmed.` }))
      }

      dispatch(actionCreators.updateAllowancePending(symbol))
    } catch (e) {
      console.log(e)
      if (e.message === 'Trading approval pending') {
        dispatch(notifierActionCreators.addErrorNotification({ message: 'Trading approval pending' }))
      }
    }
  }
}
