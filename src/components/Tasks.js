import React from "react";
import "../styles/Tasks.scss";
import image from "../icons/iconfinder_button_shape_oval_352899.png";
import Tables from "./tables/Tables.js";

import newTasks from "../data/new-tasks-table.json";
import currentJob from "../data/current-job.json";
import doneWork from "../data/done-work.json";
import draftTasks from "../data/draft.json";
import canceledWork from "../data/canceled.json";
import pendingJob from "../data/panding-job.json";

class Tasks extends React.Component {
  constructor() {
    super();
    this.newTasks = 0;
    this.currentJob = 0;
    this.doneWork = 0;
    this.draftTasks = 0;
    this.canceledWork = 0;
    this.pendingJob = 0;
  }
  state = {
    input: ""
  };

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleLink = e => {
    const links = document.querySelectorAll(".barLinks");
    for (let link of links) {
      link.classList.remove("active");
      link.classList.remove("underline");
    }
    e.target.closest(".nav-item").classList.add("underline");
    e.target.closest(".nav-item").classList.add("active");
    this.setState({ currentTab: e.target.id });
  };

  getNumber = () => {
    let i = 0;
    for (let key in newTasks) {i++};
    this.newTasks = i;
    i = 0;
    for (let key in currentJob) {i++};
    this.currentJob = i;
    i = 0;
    for (let key in doneWork) {i++};
    this.doneWork = i;
    i = 0;
    for (let key in draftTasks) {i++};
    this.draftTasks = i;
    i = 0;
    for (let key in canceledWork) {i++};
    this.canceledWork = i;
    i = 0;
    for (let key in pendingJob) {i++};
    this.pendingJob = i;
  }

  render() {
    this.getNumber();
    const { currentTab } = this.state;
    return (
      <div className="container-fluid pl-0 pr-0">
        <h3 className="pt-3 pb-3 ml-5 tasklable">Задания</h3>
        <nav className="navbar navbar-expand-lg navbar-light ml-0 pl-0 pt-0 pb-0">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active underline pb-0 addHeight barLinks pl-0 ml-5 "
              id="new"
              href="#"
            >
              <span className="tabs" id="newTasks" onClick={this.handleLink}>
                Новые
              </span>
              <span className="align-middle circle">{this.newTasks}</span>
            </a>
            <a
              className="nav-item nav-link pl-0  pb-0 addHeight barLinks ml-5"
              href="#"
              id="onWorking"
            >
              <span className="tabs" id="currentJob" onClick={this.handleLink}>
                В работе
              </span>
              <span className="align-middle circle">{this.currentJob}</span>
            </a>
            <a
              className="nav-item nav-link  pl-0 mp-0 pb-0  addHeight barLinks ml-5"
              href="#"
              id="considering"
            >
              <span className="tabs" id="pendingJob" onClick={this.handleLink}>
                На рассмотрении
              </span>
              <span className="align-middle circle">{this.pendingJob}</span>
            </a>
            <a
              className="nav-item nav-link ml-5 pl-0   pb-0 addHeight barLinks"
              href="#"
              id="done"
            >
              <span className="tabs" id="doneWork" onClick={this.handleLink}>
                Выполнены
              </span>
              <span className="align-middle circle">{this.doneWork}</span>
            </a>
            <a
              className="nav-item nav-link pl-0   pb-0 addHeight barLinks ml-5"
              href="#"
              id="canceled"
            >
              <span className="tabs" id="canceled" onClick={this.handleLink}>
                Отменены
              </span>
              <span className="align-middle circle">{this.canceledWork}</span>
            </a>
            <a
              className="nav-item nav-link  pl-0 barLinks pb-0 addHeight ml-5"
              href="#"
            >
              <span className="tabs" id="draftTasks" onClick={this.handleLink}>
                Черновики
              </span>
              <span className="align-middle circle">{this.draftTasks}</span>
            </a>
          </div>
        </nav>
        <hr className="horLine" />
        <nav className="navbar navbar-expand-lg navbar-light mt-5 ml-5 pl-0">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Поиск по слову"
                style = {{fontFamily: "PT Sans"}}
                aria-label="Search"
                value={this.state.input}
                onChange={this.handleInput}
              />
            </form>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ml-3">
                <a className="nav-link fonted" href="#">
                  <input type="checkbox" /> Персанальное
                </a>
              </li>
              <li className="nav-item ml-3 fonted">
                <a className="nav-link" href="#">
                  <input type="checkbox" /> Ночное
                </a>
              </li>
              <li className="nav-item ml-3 fonted">
                <a className="nav-link" href="#">
                  <input type="checkbox" /> Срочное
                </a>
              </li>
              <li className="nav-item dropdown ml-3">
                <a
                  className="nav-link dropdown-toggle text-dark fonted"
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
        <Tables currentTab={currentTab} />
      </div>
    );
  }
}

export default Tasks;
