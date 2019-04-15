import React from "react";
import service from "../../data/new-tasks-table.json";
class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [];
    this.amountTasks = 0;
  }

  getTasks = () => {
    this.amountTasks = 0;
    for (let key in service) {
      service[key] = service[key].map((item, index) => {
        return <td key={index}>{item}</td>;
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
      <table className="table mt-5 ml-5" style={{ width: "90%" }}>
        <thead className="thead-light">
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
