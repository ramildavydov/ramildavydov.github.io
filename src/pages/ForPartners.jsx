import { Col, Container, Row } from "reactstrap";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
import styles from "./styles/ForPartners.module.css";
import styled from "styled-components";

const PartnersLink = styled(Link)`
  color: #fff !important;
  border-color: #fff !important;
  font-weight: 400;
  color: #212529;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  &:hover {
    color: #0c54a0 !important;
    background-color: #fff;
  }
`;

const ForPartners = () => {
  return (
    <>
      <Header>Партнерам</Header>
      <main>
        <Container>
          <Row>
            <Col lg="6" className="mb-4">
              <div className={styles.partners_card}>
                <h5 className={styles.partners_card_title}>Маркетинг</h5>
                <PartnersLink to="/marketing">Перейти</PartnersLink>
              </div>
            </Col>
            <Col lg="6" className="mb-4">
              <div className={styles.partners_card}>
                <h5 className={styles.partners_card_title}>Дистрибуция</h5>
                <PartnersLink to="/distribution">Перейти</PartnersLink>
              </div>
            </Col>
            <Col lg="6" className="mb-4">
              <div className={styles.partners_card}>
                <h5 className={styles.partners_card_title}>Регистрация</h5>
                <PartnersLink to="/registration">Перейти</PartnersLink>
              </div>
            </Col>
            <Col lg="6" className="mb-4">
              <div className={styles.partners_card}>
                <h5 className={styles.partners_card_title}>Наши партнеры</h5>
                <PartnersLink to="/our-partners">Перейти</PartnersLink>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default ForPartners;
