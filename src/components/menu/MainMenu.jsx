import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo/logo.png';
import Styles from './MainMenu.module.css';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="light"
      light={true}
      dark={false}
      expand="md"
      container="xl"
      className={Styles.navbar}
    >
      <NavLink to="/">
        <img src={logo} alt="logo" className={Styles.logo} />
      </NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="m-auto" navbar>
          <NavItem>
            <NavLink to="about-us" className={Styles.navLink}>
              О нас
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="products" className={Styles.navLink}>
              Препараты
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="for-partners" className={Styles.navLink}>
              Партнерам
            </NavLink>
          </NavItem>

          <NavItem className={Styles.dropdownToggle}>
            Информация
            <ul className={Styles.dropdown}>
              <li className={Styles.dropdownItem}>
                <NavLink to="for-doctors" className={Styles.navLink}>
                  Специалистам
                </NavLink>
              </li>
              <li className={Styles.dropdownItem}>
                <NavLink to="for-patients" className={Styles.navLink}>
                  Пациентам
                </NavLink>
              </li>
              <li className={Styles.dropdownItem}>
                <NavLink to="for-patients" className={Styles.navLink}>
                  Вакансии
                </NavLink>
              </li>
            </ul>
          </NavItem>
        </Nav>
        <NavLink to="contacts" className={Styles.navLinkContacts}>
          Контакты
        </NavLink>
      </Collapse>
    </Navbar>
  );
};

export default MainMenu;
