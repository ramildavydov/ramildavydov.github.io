import products from "../../data/products";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const Product = () => {
  const { link } = useParams();
  const product = products.find((item) => item.link.toLowerCase() === link);

  if (!product) {
    return (
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-8xl font-bold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Продукт не найден
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Извините, мы не смогли найти продукт, который вы ищете.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/products/"
              className="rounded-md no-underline bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Вернуться к продуктам
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header>{product.name}</Header>
      <main>
        <Container>
          <div className="product">
            <img src={product.img} alt={product.name} className="h-72 my-3" />
            {product.content.map((prod) => {
              return (
                <div key={prod} className="instruction">
                  {prod}
                </div>
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Product;
