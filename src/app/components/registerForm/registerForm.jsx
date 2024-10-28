"use client";

import { useEffect } from "react";
import { registerUser } from "../../../lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(registerUser, undefined);

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Repeat Password"
        name="passwordRepeat"
      />
      <p className={styles.error}>{state?.error}</p>
      
      <button type="submit">Register</button>
      <small>
        Already have an account?{" "}
        <b>
          <Link href={"/login"}>Login here.</Link>
        </b>
      </small>
    </form>
  );
};

export default RegisterForm;
