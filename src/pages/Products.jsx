import { Col, Container, Row } from "reactstrap";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import products from "../data/products";
import category from "../data/category";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./styles/Products.module.css";
import Header from "../components/header/Header";
import { useState } from "react";

const ProductLink = styled(Link)`
  border: 2px solid #0c54a0;
  padding: 5px 10px;
  border-radius: 5px;
  color: #0c54a0;
  text-decoration: none;

  &:hover {
    background-color: #0c54a0;
    color: #fff !important;
  }
`;

const Products = () => {
  const [currentItems, setCurrentItems] = useState(products);

  const [active, setActive] = useState("all");

  function chooseCategory(category) {
    setActive(category);
    if (category === "all") {
      setCurrentItems(products);
      return;
    }

    setCurrentItems(products.filter((el) => el.category === category));
  }

  return (
    <>
      <Header>Продукты</Header>
      <main>
        <Container>
          <div className={styles.categories}>
            {category.map((el) => (
              <div
                onClick={() => chooseCategory(el.key)}
                key={el.key}
                className={`${styles.categories_item} ${
                  active === el.key ? styles.categories_item_active : active
                } ${
                  active === "all" && el.key === "all"
                    ? styles.categories_item_active
                    : ""
                }`}
              >
                {el.name.toUpperCase()}
              </div>
            ))}
          </div>

          <Row>
            {currentItems.map((item) => {
              return (
                <Col xl="3" key={item.id} className="mb-4">
                  <Card className={`w-full h-full shadow-lg ${styles.product_card}`}>
                    <div className="flex justify-center items-center pt-6 pb-2">
                      <img
                        src={item.img}
                        alt={`${item.name}. ${item.desc}`}
                        className={`h-40 ${styles.product_image}`}
                      />
                    </div>
                    <CardBody className="text-center">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-3"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        color="blue"
                        className="font-medium"
                        textGradient
                      >
                        <ProductLink to={`/${item.link}`}>
                          Подробнее
                        </ProductLink>
                      </Typography>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Products;
