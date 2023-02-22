import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hoc}>
        <h1>HOC</h1>
      </div>
      <span className={styles.desc}>
        (<b>H</b>igh <b>O</b>rder <b>C</b>omponent)
      </span>
      <div className={styles.line} />
    </header>
  );
};

export default Header;
