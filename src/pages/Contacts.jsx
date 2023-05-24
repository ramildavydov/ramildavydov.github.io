import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Col, Container, Row } from "reactstrap";
import styles from "./styles/Contacts.module.css";
import Header from "../components/header/Header";

const Contacts = () => {
  return (
    <>
      <Header>Контакты</Header>
      <main>
        <Container className="py-10">
          <Row>
            <Col lg="8">
              <Typography variant="h5" className="mb-3">
                Наш адрес:{" "}
                <a
                  href="https://goo.gl/maps/3tqEeHBckQfyRoQY9"
                  target="_blank"
                  rel="noreferrer"
                  className={`no-underline ${styles.contacts_link}`}
                >
                  ул. Чехова 32 Ташкент, Узбекистан
                </a>
              </Typography>
              <Typography variant="h5" className="mb-5">
                Номер:{" "}
                <a href="tel:+998712685316" className={`no-underline ${styles.contacts_link}`}>
                  +99871 268 5316
                </a>
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.646557389227!2d69.27320232280233!3d41.29479614967106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac53c0bd0af%3A0x4b0f8e7833d0dc49!2zMzIg0YPQu9C40YbQsCDQkNC90YLQvtC90LAg0KfQtdGF0L7QstCwLCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1681557968684!5m2!1sru!2s"
                loading="lazy"
                className={styles.contacts_map}
                title="contact-map"
              ></iframe>
            </Col>
            <Col lg="4">
              <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="black">
                  Напишите нам
                </Typography>
                <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
                  <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Имя" />
                    <Input size="lg" label="Фамилия" />
                    <Input size="lg" label="Почта" />
                    <Input size="lg" label="Тема" />
                    <Textarea label="Сообщение" />
                  </div>
                  <Button className="mt-6" fullWidth>
                    Отправить
                  </Button>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Contacts;
