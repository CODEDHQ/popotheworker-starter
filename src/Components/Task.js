import React, { Component } from "react";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
import { MDBListGroupItem } from "mdbreact";

class Task extends Component {
  render() {
    let dueDate;
    if (this.props.task.due)
      dueDate = <small>{this.props.task.due.fromNow()}</small>;
    return (
      <MDBListGroupItem>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-start flex-column">
            <div className="d-flex justify-content-start">
              <div className="flex-grow-1 p-3 text-wrap">
                <h5 className="mb-1">{this.props.task.title}</h5>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-1">{this.props.task.details}</p>
        {dueDate}
      </MDBListGroupItem>
    );
  }
}

export default observer(Task);
