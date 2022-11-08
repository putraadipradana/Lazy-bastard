import Head from "next/head";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Lazy Bastard</title>
      </Head>
      <Layout>
        <div>
          <h2 className="text-4xl leading-10 tracking-tight font-extrabold text-gray-900">
            Press
          </h2>
          <div className="mt-5">
            <p className="text-xl leading-7 text-gray-500">
              Get weekly articles in your inbox on how to grow your business
            </p>
          </div>
        </div>
        <Posts posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
