import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Oh hey!</h1>
            <h2>I'm Timothy, a full-stack developer from Souther California.</h2>
            <p>Need a developer? <Link to="/contact/">Contact Me</Link></p>
        </Layout>
    )
}

export default IndexPage