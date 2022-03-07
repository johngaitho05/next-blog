import Link from 'next/link'
import Head from "next/head"
import Layout from '../../components/Layout'
import Script from 'next/script'

export default function FirstPost() {
    return (
        <Layout> {/* Layout Component */}
            <Head>
                <title>First Post</title>
            </Head>
            {/*<Script*/}
            {/*    src="https://connect.facebook.net/en_US/sdk.js"*/}
            {/*    strategy="lazyOnload"*/}
            {/*    onLoad={() =>*/}
            {/*        console.log(`script loaded correctly, window.FB has been populated`)*/}
            {/*    }*/}
            {/*/>*/}
            <h1>First Post</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis enim quas tempora. Accusantium amet
                assumenda consequuntur dicta ea eveniet fugiat incidunt minus nihil non numquam quas, sapiente sunt
                veniam, voluptatibus!
            </p>
        </Layout>
    )
}