import { Container } from "reactstrap";
import Header from "../components/header/Header";
import partners from "../data/partners";

const OurPartners = () => {
  return (
    <>
      <Header>Наши партнеры</Header>
      <main>
        <Container>
          {partners.map((partner) => {
            return (
              <div key={partner.id}>
                <a href={partner.link} target="_blank" rel="noreferrer">
                  <img src={partner.img} alt={partner.name} />
                </a>
              </div>
            );
          })}
        </Container>
      </main>
    </>
  );
};

export default OurPartners;
