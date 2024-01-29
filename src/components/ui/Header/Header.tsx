import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.obqvi}>
        <Logo />
        <Link to={"/"} className={styles["all-obqvi"]}>
          Всички коли
        </Link>
      </div>

      <nav>
        <ul className={styles["nav-items"]}>
          <li>
            <NavLink to={"/"}>Продай кола</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Често задавани въпроси</NavLink>
          </li>
          <li className={styles["register"]}>
            <Link to={"/register"}>Влез</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
