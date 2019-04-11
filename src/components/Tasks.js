import React from "react";
import "../styles/Tasks.scss";
import image from "../icons/iconfinder_button_shape_oval_352899.png"

class Tasks extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Задания</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ml-0 pl-0">
          <div className="navbar-nav">
            <a className="nav-item nav-link active ml-0 pl-0 mr-5" href="#">
              Home
              <span className = "align-middle circle">10</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Tasks;
