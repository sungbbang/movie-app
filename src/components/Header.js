import popcornImage from "../images/popcorn.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Pick up Movie</h1>
      <img className={styles.logo} src={popcornImage} alt="Popcorn" />
    </div>
  );
}

export default Header;
