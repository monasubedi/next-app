import Image from "next/image";
import { getUser } from "../../../lib/data";
import styles from "./user.module.css";

const User = async ({ id }) => {
  const user = await getUser(id);
  return (
    <>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        className={styles.avatar}
        alt="avatar"
        width={50}
        height={50}
      />
      <div className={styles.detailText}>
        <span className={styles.author}>Author</span>
        <span className={styles.name}>{user.username}</span>
      </div>
    </>
  );
};

export default User;
