import React, { Component } from "react";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
import {
  MDBListGroupItem,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBIcon,
  MDBModalFooter,
  MDBBtn,
  MDBCloseIcon
} from "mdbreact";

class Task extends Component {
  state = {
    modal: false
  };
  deleteTask = () => {
    this.toggleDeleteModal();
    console.log(this.props.task.id);
    tasksStore.deleteTask(this.props.task.id);
  };
  toggleDeleteModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  checkTask = () => {
    tasksStore.checkTask(this.props.task.id);
  };
  render() {
    let dueDate;
    if (this.props.task.due)
      dueDate = <small>{this.props.task.due.fromNow()}</small>;
    return (
      <MDBListGroupItem>
        <MDBModal
          modalStyle="danger"
          className="text-white"
          size="sm"
          position="top"
          isOpen={this.state.modal}
          toggle={this.toggleDeleteModal.bind(this)}
        >
          <MDBModalHeader
            className="text-center"
            titleClass="w-100"
            tag="p"
            toggle={this.toggleDeleteModal.bind(this)}
          >
            Are you sure?
          </MDBModalHeader>
          <MDBModalBody className="text-center">
            <MDBIcon icon="times" size="4x" pulse className="animated tada" />
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="danger" onClick={this.deleteTask.bind(this)}>
              Yes
            </MDBBtn>
            <MDBBtn
              color="danger"
              outline
              onClick={this.toggleDeleteModal.bind(this)}
            >
              No
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-start flex-column">
            <div className="d-flex justify-content-start">
              <div className="align-self-center">
                <MDBIcon
                  far
                  icon="square"
                  size="2x"
                  onClick={this.checkTask.bind(this)}
                />
              </div>
              <div className="flex-grow-1 p-3 text-wrap">
                <h5 className="mb-1">{this.props.task.title}</h5>
              </div>
            </div>
          </div>
          <div>
            <MDBCloseIcon
              className="ml-auto"
              onClick={this.toggleDeleteModal.bind(this)}
            />
          </div>
        </div>
        <p className="mb-1">{this.props.task.details}</p>
        {dueDate}
      </MDBListGroupItem>
    );
  }
}

export default observer(Task);
