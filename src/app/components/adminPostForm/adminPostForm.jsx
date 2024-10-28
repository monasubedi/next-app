"use client";

import { createPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(createPost, undefined);
  return (
    <div className={styles.container}>
      <h1>Add New Post</h1>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="title" name="title" />
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="img" name="img" />
        <textarea rows={3} placeholder="description" name="desc" />
        {state && state.error}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AdminPostForm;
