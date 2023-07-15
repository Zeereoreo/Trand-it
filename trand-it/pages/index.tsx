import Link from 'next/link'
import Layout from '../components/Layout'
import { Mongoose } from "mongoose";

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Trand-it</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
