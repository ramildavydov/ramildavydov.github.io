import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.row}>
          <Col md="6" lg="3" className="mb-4 mb-lg-0">
            <h3 className={styles.heading}>О компании</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink to="about-us" className={styles.listLink}>
                  О нас
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="for-patients" className={styles.listLink}>
                  Пациентам
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="articles" className={styles.listLink}>
                  Статьи
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="contacts" className={styles.listLink}>
                  Свяжитесь с нами
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="6" lg="3" className="mx-auto mb-5 mb-lg-0">
            <h3 className={styles.heading}>Специалистам</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink to="for-doctors" className={styles.listLink}>
                  Врачам
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="career" className={styles.listLink}>
                  Карьера
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="6" lg="2" className="mx-auto mb-5 mb-lg-0">
            <h3 className={styles.heading}>Партнерам</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink to="marketing" className={styles.listLink}>
                  Маркетинг
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="distribution" className={styles.listLink}>
                  Дистрибуция
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="registration" className={styles.listLink}>
                  Регистрация
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md="6" lg="4">
            <h3 className={styles.heading}>Контакты</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="tel:+998712685316" className={styles.listLink}>
                  +99871 268 5316
                </a>
              </li>
              <li className={styles.listItem}>
                <a
                  href="https://goo.gl/maps/3tqEeHBckQfyRoQY9"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.listLink}
                >
                  ул. Чехова 32 Ташкент, Узбекистан
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
