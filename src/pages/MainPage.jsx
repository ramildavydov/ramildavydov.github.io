import { Outlet } from "react-router-dom";
import MainMenu from "../components/menu/MainMenu";
import Footer from "../components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainPage;
