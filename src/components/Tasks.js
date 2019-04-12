import React from "react";
import "../styles/Tasks.scss";
import image from "../icons/iconfinder_button_shape_oval_352899.png";

class Tasks extends React.Component {
  handleLink(e) {
    const links = document.querySelectorAll(".barLinks");
    for (let link of links) {
      link.classList.remove("active");
      link.classList.remove("underline");
    }
    // e.target.classList.add("underline");
    // e.target.classList.add("active");
    e.target.closest(".nav-item").classList.add("underline");
    e.target.closest(".nav-item").classList.add("active");
  }

  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <h3 className="pt-3 pb-3 ml-5">Задания</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ml-0 pl-0 pt-0 pb-0">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active underline pb-0 addHeight barLinks pl-0 ml-5"
              id="new"
              href="#"
              onClick={this.handleLink}
            >
              <span className="tabs">Новые</span>
              <span className="align-middle circle">10</span>
            </a>
            <a
              className="nav-item nav-link pl-0  pb-0 addHeight barLinks ml-5"
              href="#"
              onClick={this.handleLink}
              id="onWorking"
            >
              <span className="tabs">В работе</span>
              <span className="align-middle circle">10</span>
            </a>
            <a
              className="nav-item nav-link  pl-0 mp-0 pb-0  addHeight barLinks ml-5"
              href="#"
              onClick={this.handleLink}
              id="considering"
            >
              <span className="tabs">На рассмотрении</span>
              <span className="align-middle circle">10</span>
            </a>
            <a
              className="nav-item nav-link ml-5 pl-0   pb-0 addHeight barLinks"
              href="#"
              onClick={this.handleLink}
              id="done"
            >
              <span className="tabs">Выполнены</span>
              <span className="align-middle circle">10</span>
            </a>
            <a
              className="nav-item nav-link pl-0   pb-0 addHeight barLinks ml-5"
              href="#"
              onClick={this.handleLink}
              id="canceled"
            >
              <span className="tabs">Отменены</span>
              <span className="align-middle circle">10</span>
            </a>
            <a
              className="nav-item nav-link  pl-0 barLinks pb-0 addHeight ml-5"
              href="#"
              onClick={this.handleLink}
            >
              <span className="tabs">Черновики</span>
              <span className="align-middle circle">10</span>
            </a>
          </div>
        </nav>

        <hr className="horLine" />

        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5 ml-5 pl-0">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Поиск по слову"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ml-3">
                <a className="nav-link" href="#">
                  <input type="checkbox" /> Персанальное
                </a>
              </li>
              <li className="nav-item ml-3">
                <a className="nav-link" href="#">
                  <input type="checkbox" /> Ночное
                </a>
              </li>
              <li className="nav-item ml-3">
                <a className="nav-link" href="#">
                  <input type="checkbox" /> Срочное
                </a>
              </li>
              <li className="nav-item dropdown ml-3">
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
                    Персанальное
                  </a>
                  <a className="dropdown-item" href="#">
                    Ночное
                  </a>

                  <a className="dropdown-item" href="#">
                    Срочное
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Tasks;
