/** @jsx jsx */
import React from 'react'
import { Global, jsx, css, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'


import theme from './theme'
import fontStyles from './font-styles'
import resetStyles from './reset-styles'

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background};
    min-height: 100vh;
    min-width: 320px;
    overflow-x: hidden;
    position: relative;
  `}
`

const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: 100%;
  `}
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="theme-color" content="#2F195B"/>
        <meta name="msapplication-navbutton-color" content="#2F195B"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#2F195B"/>
      </Helmet>
        <ThemeProvider theme={theme}>
            <Container>
                <Global styles={css(resetStyles, fontStyles)} />
                <ToastContainer autoClose={3000} />
                <Main>
                    {children}
                </Main>
            </Container>
        </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
