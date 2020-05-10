import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/global'
import { theme } from '../theme/theme'
import Navigation from '../navigation/Navigation'

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Head>
            <title>heyjonna</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400|Playfair+Display|Questrial&display=swap" />
        </Head>
        <GlobalStyle />
        <Navigation />
        {children}
    </ThemeProvider>
)

export default Layout;