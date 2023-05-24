import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import ForDoctors from "./pages/ForDoctors";
import ForPatients from "./pages/ForPatients";
import Contacts from "./pages/Contacts";
import ForPartners from "./pages/ForPartners";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import Career from "./pages/Career";
import Marketing from "./pages/Marketing";
import Distribution from "./pages/Distribution";
import Registration from "./pages/Registration";
import Product from "./components/product/Product";
import OurPartners from "./pages/OurPartners";
import "./App.css";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }, [pathname]);

    return null;
  }

  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index={true} element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="/:link" element={<Product />} />
          <Route path="for-doctors" element={<ForDoctors />} />
          <Route path="for-patients" element={<ForPatients />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="for-partners" element={<ForPartners />} />
          <Route path="our-partners" element={<OurPartners />} />
          <Route path="articles" element={<Articles />} />
          <Route path="career" element={<Career />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="distribution" element={<Distribution />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
