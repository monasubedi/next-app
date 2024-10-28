import React from "react";
import Links from "./links/links";
import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "../../../lib/auth";

const Navbar = async() => {
  
  const session = await auth();
  console.log("logout",session);
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
