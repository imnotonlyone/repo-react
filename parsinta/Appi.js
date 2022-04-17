import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   // name: "ilham",
    //   // class: 12,
    //   // book: "IPA",
    // };

    this.state = {
      user: [],
    };
  }
  getUser = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    this.setState({
      user: response.data,
    });
  };

  componentDidMount() {
    this.getUser();
  }
  render() {
    // 1. cara mempersingkat state
    // const name = this.state.name;
    // const kelas = this.state.class;
    // const name = this.state.name;

    const { user } = this.state;
    return (
      <div>
        {/* Task 1 */}
        {/* <h1>my name is {name}</h1> */}
        {/* <h1>My class is {kelas}</h1> */}
        <div> Hello my name is {user.name}</div>
        <div> My username is {user.username}</div>
        <div>My email is {user.email}</div>
      </div>
    );
  }
}

export default App;
