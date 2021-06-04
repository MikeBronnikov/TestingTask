import React from "react";

import "./header.scss";
import logo from "../../assets/img/logo.svg";
import free from "../../assets/img/free.svg";
import enter from "../../assets/img/enter.svg";
import notification from "../../assets/img/notification.svg";
interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="header">
      <section className='header__leftside'>
        <img src={logo} className="header__logo" alt="logo" />
       <p className="header__name header__hide">Devias Kit</p>
        <div className="header__textwrap">
          <img className="header__free header__hide" src={free} alt="free" />
          <p className="header__paragraph">
            See our PRO version <span className='header__hide'> for more design components & coded in React
            follow this link:</span>
            <a
              href="https://devias.io/products/devias-kit-pro"
              className="header__link"
            >
              {" "}
              https://devias.io/products/devias-kit-pro{" "}
            </a>
          </p>
        </div>
      </section>
      <section className="header__rightside">
        <img className='header__notification' src={notification} alt="notification" />
        <img src={enter} alt="enter" />
      </section>
    </div>
  );
};

export default Header;
