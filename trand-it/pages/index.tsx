import Link from 'next/link'
import Layout from '../components/Layout'
import { Mongoose } from "mongoose";
import styled from 'styled-components';

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

const Header = styled.h2`
  margin: 0;
  text-align: center;
`

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Header>Trand-it</Header>
    <p>
      {/* 서치 */}
      <Link href="/search">search</Link>
    </p>
  </Layout>
)

export default IndexPage
