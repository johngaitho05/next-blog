import Head from 'next/head'
import Link from "next/link";
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../static/css/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there, my name is John Gaitho. I am a full stack Software Engineer. You can learn more about me
            {" "}
            <a href='https://johngaitho.info' target="_blank">Here</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}