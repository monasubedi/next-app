"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "../../../../lib/action";

const links = [
  {
    path: "/",
    page: "Home",
  },
  {
    path: "/about",
    page: "About",
  },
  {
    path: "/contact",
    page: "Contact",
  },
  {
    path: "/blog",
    page: "Blog",
  },
];

const Links = ({session}) => {

  const isAdmin = true;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.page} />
        ))}
        {session?.user ? (
          <>
            {isAdmin && <NavLink item={{ path: "/admin", page: "Admin" }} />}
            <form action={handleLogout}>
              <button type="submit" className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ path: "/login", page: "Login" }} />
        )}
      </div>
      <Image
        className={styles.menuBtn}
        onClick={() => setOpenMenu((prev) => !prev)}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
      />
      {openMenu && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.page} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
