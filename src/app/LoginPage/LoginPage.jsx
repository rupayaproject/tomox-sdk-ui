// @flow
import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import LoginPageRenderer from './LoginPageRenderer'

type Props = {
  authenticated: boolean,
}

type State = {
  selectedTabId: string,
}

class LoginPage extends React.PureComponent<Props, State> {

  state = {
    selectedTabId: 'ledger',
  }

  handleTabChange = (selectedTabId: string) => {
    this.setState({ selectedTabId })
  }
  render() {

    const {
      props: { authenticated },
      state: { selectedTabId},
      handleTabChange,
    } = this

    if (authenticated) {
      return <Redirect to="/trade" />
    }

    return (
      <Wrapper>
        <LoginPageRenderer
          selectedTabId={selectedTabId}
          handleTabChange={handleTabChange} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 100%;
`

export default LoginPage
