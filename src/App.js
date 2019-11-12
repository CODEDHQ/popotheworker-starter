import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import moment from "moment";
import FutureList from "./Components/FutureList";
import tasksStore from "./Stores/TasksStore";
import { MDBContainer } from "mdbreact";

class App extends Component {
  state = {
    todayTasks: [
      {
        title: "Eat a banana",
        details: "Find a banana. Eat it.",
        due: moment()
      },
      {
        title: "Tell The Monkey to get off his monkey butt and do something.",
        details: "",
        due: moment()
      }
    ],
    futureTasks: []
  };
  componentDidMount() {
    tasksStore.retrieveFromLocalStorage();
  }

  render() {
    return (
      <MDBContainer>
        <CreateTaskForm />
        <TodayList />
        <FutureList />
      </MDBContainer>
    );
  }
}

export default App;
