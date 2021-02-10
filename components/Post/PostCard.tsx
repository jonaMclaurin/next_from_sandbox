import React from "react";
import Link from "next/link";
import { Card, Figure, Title, Lead } from "./PostCardStyle";

export const PostCard: React.FC = ({ post }) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`} passHref>
      <Card>
        <Figure>
          <img alt={post.title} src={post.image} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  );
};
