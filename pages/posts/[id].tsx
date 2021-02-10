import React from "react";
import { useRouter } from "next/router";
import { Loader } from "../../components/Loader";
import { postPaths as paths } from "../../shared/staticPaths";
import { PostBody } from "../../components/Post/PostBody";
import { getPostsData } from "../../lib/posts";

export const getStaticProps = async ({ params }) => {
  const allData = getPostsData();
  const allPosts = allData.parsedDataPosts;
  const post = allPosts.filter((post) => post.id === params.id);
  return { props: { post } };
};

export async function getStaticPaths() {
  console.log(paths);
  return { paths, fallback: true };
}

const Post: React.FC = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;
  return <PostBody post={post} />;
};

export default Post;
