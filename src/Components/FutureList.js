import React, { Component } from "react";
import Task from "./Task";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
import { MDBListGroup } from "mdbreact";

class FutureList extends Component {
  render() {
    let tasks = tasksStore.futureTasks.map(task => <Task task={task} />);
    return (
      <div>
        <h3>Future</h3>
        <MDBListGroup>{tasks}</MDBListGroup>
      </div>
    );
  }
}

export default observer(FutureList);
