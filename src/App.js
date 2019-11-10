import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        title: "Eat a banana",
        details: "Find a banana. Eat it."
      },
      {
        title: "Tell The Monkey to get off his monkey butt and do something.",
        details: ""
      }
    ]
  };
  render() {
    let tasks_list = this.state.tasks.map(task => (
      <p>
        {task.title} - {task.details}
      </p>
    ));
    return <div className="App">{tasks_list}</div>;
  }
}

export default App;
