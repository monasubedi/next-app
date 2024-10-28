"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.navLink} ${
        pathName === item.path ? styles.active : ""}`}
    >
      {item.page}
    </Link>
  );
};

export default NavLink;
