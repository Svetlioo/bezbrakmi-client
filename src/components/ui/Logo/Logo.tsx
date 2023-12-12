import { FaCarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to={"/"}>
      <FaCarAlt className={styles.logo} />
    </Link>
  );
}

export default Logo;
