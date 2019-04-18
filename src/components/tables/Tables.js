import React from "react";
import newTasks from "../../data/new-tasks-table.json";
import currentJob from "../../data/current-job.json";
import doneWork from "../../data/done-work.json";
import draftTasks from "../../data/draft.json";
import canceledWork from "../../data/canceled.json";
import pendingJob from "../../data/panding-job.json";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [];
    this.amountTasks = 0;
  }

  state = {};

  getTasks = () => {
    this.amountTasks = 0;
    this.tasks = [];
    let copiedJSON = null;
    switch (this.props.currentTab) {
      case "newTasks":
        copiedJSON = newTasks;
        break;
      case "pendingJob":
        copiedJSON = pendingJob;
        break;
      case "doneWork":
        copiedJSON = doneWork;
        break;
      case "draftTasks":
        copiedJSON = draftTasks;
        break;
      case "canceled":
        copiedJSON = canceledWork;
        break;
      case "currentJob":
        copiedJSON = currentJob;
        break;
      default:
        copiedJSON = newTasks;
        break;
    }
    let service = Object.assign({}, copiedJSON);
    for (let key in service) {
      service[key] = service[key].map((item, index) => {
        return <td style = {{fontFamily: "PT Sans"}} key={index}>{item}</td>;
      });
    }
    for (let key in service) {
      this.tasks.push(<tr key={key}>{service[key]}</tr>);
      this.amountTasks = parseInt(key) + 1;
    }
    return this.tasks;
  };

  render() {
    return (
      <table className="table mt-5 ml-5" style={{ width: "90%", fontFamily: "PT Sans"}}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Город</th>
            <th scope="col">Название</th>
            <th scope="col">Выполнить до</th>
            <th scope="col">Сумма</th>
          </tr>
        </thead>
        <tbody>{this.getTasks()}</tbody>
      </table>
    );
  }
}

export default Tables;
