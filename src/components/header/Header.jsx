import { Container } from "reactstrap";
import styles from "./Header.module.css";

const Header = ({ children, height }) => {
 
  return (
    <header className={styles.header} style={{ height: `${height}vh` }}>
      <Container className={styles.container}>
        <div className={styles.title}>{children}</div>
      </Container>
    </header>
  );
};

export default Header;
