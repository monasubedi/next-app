import LoginForm from "@/app/components/loginForm/loginForm";
import { handleLoginWithGithub } from "../../../lib/action";
import styles from "./login.module.css";

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleLoginWithGithub}>
          <button className={styles.github} type="submit">Sign in with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
