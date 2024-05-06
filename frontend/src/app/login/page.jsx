import styles from "../../app/dashboard/ui/login/login.module.css";
import LoginForm from "../../app/dashboard/ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
