"use client";
import { useRouter } from "next/navigation";
import styles from "./loginForm.module.css";
import { login } from "../../../lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <p className={styles.error}>{state?.error}</p>
      <button>Login with Credentials</button>
      <small>
        Don't have an account?{" "}
        <b>
          <Link href={"/register"}>Register here.</Link>
        </b>
      </small>
    </form>
  );
};

export default LoginForm;
