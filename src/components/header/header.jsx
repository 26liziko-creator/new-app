import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerCont}>
      <Link href="/about">CodeIT</Link>
      {/* TODO: Navigation */}
      {/* TODO: Props-ის განხილვა*/}
      <nav className={styles.navCont}>
        <ul className={styles.navList}>
          <li>1</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;