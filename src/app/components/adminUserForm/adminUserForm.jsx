"use client"
import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = ({ userId }) => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div className={styles.container}>
      <h1>Add New User</h1>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="username" name="username" />
        <input type="email" placeholder="email" name="email" />
        <input type="text" placeholder="img" name="img" />
        <input type="password" placeholder="password" name="password" />
        <select name="isAdmin">
          <option>isAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        {state && state.error}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AdminUserForm;
