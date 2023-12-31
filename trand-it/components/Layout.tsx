import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header />
    {/* <header>
      <nav>
        <Link href="/">Home</Link>  {' '}
        <Link href="/about">COMMUNITY</Link>{' '}
        <Link href="/users">ETC</Link> {' '}
        <a href="/api/users">My Page</a>
      </nav>
    </header> */}
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
