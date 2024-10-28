import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title:"About Page",
  description:"About desc"
}
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission. We're world's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <span>Year of experience</span>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <span>Year of experience</span>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <span>Year of experience</span>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about img" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
