import React from 'react'
import Head from 'next/head'
import Navigation from '../navigation/Navigation';
import '../../public/static/styles/main.less';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>heyjonna</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400|Playfair+Display|Questrial&display=swap" />
        </Head>
        <Navigation />
        {children}
    </>
)

export default Layout;