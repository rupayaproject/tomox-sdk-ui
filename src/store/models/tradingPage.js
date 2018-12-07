// @flow
import {
  getTokenPairsDomain,
  getAccountDomain,
  getAccountBalancesDomain,
  getConnectionDomain
} from '../domains';
import * as actionCreators from '../actions/tradingPage';
import type { State, ThunkAction } from '../../types';
import { getSigner } from '../services/signer';
import {
  // parseTrades,
  parseOrders,
  parseTokenPairData
} from '../../utils/parsers';

// eslint-disable-next-line
export default function tradingPageSelector(state: State) {
  let accountDomain = getAccountDomain(state);
  let accountBalancesDomain = getAccountBalancesDomain(state);
  let pairDomain = getTokenPairsDomain(state);
  let { isInitiated, isConnected } = getConnectionDomain(state);
  let {
    makeFee,
    takeFee,
    baseTokenSymbol,
    quoteTokenSymbol
  } = pairDomain.getCurrentPair();

  let authenticated = accountDomain.authenticated();
  let baseTokenBalance = accountBalancesDomain.tokenBalance(baseTokenSymbol);
  let quoteTokenBalance = accountBalancesDomain.tokenBalance(quoteTokenSymbol);
  let baseTokenAllowance = accountBalancesDomain.tokenAllowance(
    baseTokenSymbol
  );
  let quoteTokenAllowance = accountBalancesDomain.tokenAllowance(
    quoteTokenSymbol
  );

  return {
    makeFee,
    takeFee,
    authenticated,
    baseTokenAllowance,
    baseTokenBalance,
    baseTokenSymbol,
    isConnected,
    isInitiated,
    quoteTokenAllowance,
    quoteTokenBalance,
    quoteTokenSymbol
  };
}

export const getDefaultData = (): ThunkAction => {
  return async (dispatch, getState, { api, socket }) => {
    try {
      socket.unsubscribeChart();
      socket.unsubscribeOrderBook();
      socket.unsubscribeTrades();

      let state = getState();
      let signer = getSigner();
      let pairDomain = getTokenPairsDomain(state);

      let userAddress = await signer.getAddress();
      let currentPair = pairDomain.getCurrentPair();
      // let pairs = pairDomain.getPairsByCode();

      let { baseTokenDecimals, quoteTokenDecimals } = currentPair;

      let tokenPairData = await api.fetchTokenPairData();

      console.log('TOKEN PAIR DATA', tokenPairData);
      console.log('DECIMALS', baseTokenDecimals, quoteTokenDecimals);

      tokenPairData = parseTokenPairData(tokenPairData, baseTokenDecimals);

      let orders = await api.fetchOrders(userAddress);
      // console.log(orders, currentPair)
      orders = parseOrders(orders, baseTokenDecimals);

      dispatch(actionCreators.updateTokenPairData(tokenPairData));
      dispatch(actionCreators.initOrdersTable(orders));

      socket.subscribeTrades(currentPair);
      socket.subscribeOrderBook(currentPair);
      socket.subscribeChart(currentPair);
    } catch (e) {
      console.log(e);
    }
  };
};

// eslint-disable-next-line
export const updateCurrentPair = (pair: string): ThunkAction => {
  return async (dispatch, getState, { api, socket }) => {
    try {
      socket.unsubscribeChart();
      socket.unsubscribeOrderBook();
      socket.unsubscribeTrades();

      let state = getState();
      let pairDomain = getTokenPairsDomain(state);

      dispatch(actionCreators.updateCurrentPair(pair));
      let tokenPair = pairDomain.getPair(pair);

      socket.subscribeTrades(tokenPair);
      socket.subscribeOrderBook(tokenPair);
      socket.subscribeChart(tokenPair);
    } catch (e) {
      console.log(e);
    }
  };
};
