import React, { Component } from "react";
import Tasks from "./components/Tasks.js";
import Statistics from "./components/Statistics.js";
import Finance from "./components/Finance.js";
import Companies from "./components/Companies.js";
import "./App.scss";
import Icon1 from "./icons/icon1.png";
import Icon2 from "./icons/ic-help-outline-24-px-copy-3.png";

class App extends Component {
  state = {
    page: null
  };

  switchTabs = e => {
    const tabs = document.querySelectorAll(".tab");
    const { page } = this.state;
    for (let tab of tabs) {
      tab.classList.remove("active");
    }
    const id = e.target.id;
    switch (id) {
      case "tasksTab":
        e.target.classList.add("active");
        this.setState({ page: "tasksTab" });
        break;
      case "financeTab":
        e.target.classList.add("active");
        this.setState({ page: "financeTab" });
        break;
      case "companyTab":
        e.target.classList.add("active");
        this.setState({ page: "companyTab" });
        break;
      case "statisticsTab":
        e.target.classList.add("active");
        this.setState({ page: "statisticsTab" });
        break;
      default:
        e.target.classList.add("active");
        this.setState({ page: "tasksTab" });
        break;
    }
  };

  render() {
    const { page } = this.state;
    return (
      <>
        <header
          className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"
          style={{ background: "#222222" }}
        >
          <a className="navbar-brand mr-0 mr-md-2 pointer " id = "lable"> taskon </a>
          <div className="navbar-nav-scroll">
            <ul
              className="navbar-nav bd-navbar-nav flex-row"
              onClick={this.switchTabs}
            >
              <li className="navbar-nav bd-navbar-nav flex-row pointer">
                <a className="nav-link active tab" id="tasksTab">
                  Задания
                </a>
              </li>
              <li className="navbar-nav bd-navbar-nav flex-row pointer">
                <a className="nav-link tab" id="financeTab">
                  Финансы
                </a>
              </li>
              <li className="navbar-nav bd-navbar-nav flex-row pointer">
                <a className="nav-link tab" id="companyTab">
                  Компания
                </a>
              </li>
              <li className="navbar-nav bd-navbar-nav flex-row pointer">
                <a className="nav-link tab" id="statisticsTab">
                  Статистика
                </a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item pointer">
              <a className="nav-link p-2"> Баланс: 204 012 Р</a>
            </li>
            <li className="nav-item pointer">
              <a className="nav-link p-2">
                {" "}
                <img src={Icon1} />
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle pointer"
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

            <li className="nav-item pointer">
              <a className="nav-link p-2">
                {" "}
                <img src={Icon2} />
              </a>
            </li>
          </ul>
        </header>
        <div id="wrapper">
          {page === "statisticsTab" ? (
            <Statistics />
          ) : page === "financeTab" ? (
            <Finance />
          ) : page === "companyTab" ? (
            <Companies />
          ) : (
            <Tasks />
          )}
        </div>
      </>
    );
  }
}

export default App;
