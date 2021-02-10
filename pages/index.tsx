import React from "react";
import Head from "next/head";
import { Feed } from "../components/Feed";
import { getPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allData = getPostsData();
  const posts = allData.parsedDataPosts;
  const categories = allData.parsedDataCat;

  return {
    props: {
      posts,
      categories
    }
  };
}

export default function Front({ posts, categories }) {
  return (
    <>
      <Head>
        <title>Front page of the Internet</title>
      </Head>

      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
}
