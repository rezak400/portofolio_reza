import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
    return (
        <Layout title="About">
            <h1>Under Construction</h1>
            <Link href="/">
                <a className="bg-blue-200">{"< Go back"}</a>
            </Link>
        </Layout>
    )
}
