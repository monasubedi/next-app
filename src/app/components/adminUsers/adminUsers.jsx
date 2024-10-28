import { deleteUser } from "@/lib/action";
import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div className={styles.users}>
        {users.map((user) => (
          <div className={styles.user} key={user._id}>
            <div className={styles.detail}>
              {/* <Image
            src={user.img || "/noavatar.png"}
            alt="avatar-img"
            width={50}
            height={50}
          /> */}
              <span className={styles.title}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user._id} />
              <button className={styles.del} type="submit">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
