import Link from 'next/link'
import Layout from '../components/Layout'
import { Mongoose } from "mongoose";
import Banner from '../components/Banner';

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}


const IndexPage = () => (
  <Layout title='Trad-IT'>
    <p>
      {/* 서치 */}
      {/* <Header>Trand-it</Header> */}
      <Link  className="text-3xl font-bold underline" href="/search">CSS확인</Link>
      <Banner></Banner>
    </p>
  </Layout>
)

export default IndexPage
