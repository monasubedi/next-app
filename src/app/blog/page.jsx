import React from "react";
import PostCard from "../components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "../../lib/data";

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.length > 0 &&
        posts.map((post) => <PostCard post={post} key={post._id} />)}
    </div>
  );
};

export default BlogPage;
