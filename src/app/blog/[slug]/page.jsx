import React, { Suspense } from "react";
import styles from "./singlePost.module.css";

import { getPost } from "../../../lib/data";
import User from "@/app/components/user/user";
import Image from "next/image";

// export const metadata = async ({ params }) => {
//   const post = await getPost(params?.slug);
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
  const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post?.img && (
          <Image
            src="https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.img}
            fill
            alt="img"
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>loading...</div>}>
            {post?.userId && <User id={post.userId} />}
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.published}>Published</span>
            <span className={styles.date}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
