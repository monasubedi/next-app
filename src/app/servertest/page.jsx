import React from "react";
import { createPost } from "../../lib/action";

const ServerTest = async() => {
  return (
    <form action={createPost}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Desc" name="desc" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="text" placeholder="UserId" name="userId" />
      <button type="submit">Create</button>
    </form>
  );
};

export default ServerTest;
