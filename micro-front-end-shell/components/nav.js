import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => (
  <div className={styles.nav}>
    <Link href="/mario">Load Mario</Link>
    <Link href="/">Home</Link>
    <Link href="/luigi">Load Luigi</Link>
    <Link href="/allan">Load CR7</Link>
  </div>
);

export default Nav;
