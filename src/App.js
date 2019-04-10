import React, { Component } from "react";
import Tasks from "./components/Tasks.js";
import "./App.scss";
import Icon1 from "./icons/icon1.png";
import Icon2 from "./icons/ic-help-outline-24-px-copy-3.png";

class App extends Component {
  render() {
    return (
      <header
        className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"
        style={{ background: "gray" }}
      >
        <a className="navbar-brand mr-0 mr-md-2"> taskon </a>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="navbar-nav bd-navbar-nav flex-row">
              <a className="nav-link active"> Задания</a>
            </li>
            <li className="navbar-nav bd-navbar-nav flex-row">
              <a className="nav-link"> Финансы</a>
            </li>
            <li className="navbar-nav bd-navbar-nav flex-row">
              <a className="nav-link"> Компания</a>
            </li>
            <li className="navbar-nav bd-navbar-nav flex-row">
              <a className="nav-link"> Статистика</a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <li className="nav-item">
            <a className="nav-link p-2"> Баланс: 204 012 Р</a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-2">
              {" "}
              <img src={Icon1} />
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Сергей Стародубов
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Логин
              </a>
              <a className="dropdown-item" href="#">
                Настройки
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Выйти
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link p-2">
              {" "}
              <img src={Icon2} />
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default App;
