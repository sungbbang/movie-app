import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.loadingMessage}>LOADING...</h1>
    </div>
  );
}

export default Loading;
