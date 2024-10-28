// "use client"
import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";


export const metadata = {
  title:"Contact Title",
  description: "Contact desc"
}


const ContactPage = () => { 
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surename" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number(Optional)" />
          <textarea placeholder="Message" rows={10} cols={30} />
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
