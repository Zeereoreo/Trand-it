import Link from 'next/link'
import Layout from '../components/Layout'
import { Mongoose } from "mongoose";
import styled from 'styled-components';
import Banner from '../components/Banner';

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
  <Layout title='Trad-IT'>
    <p>
      {/* 서치 */}
      {/* <Header>Trand-it</Header> */}
      <Link href="/search">search</Link>
      <Banner></Banner>
    </p>
  </Layout>
)

export default IndexPage
