import React from "react";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    //  Basic State
    // this.state = {
    //   name: "ilham maulana",
    //   age: 20,
    // };

    /// 2

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

  // di mounted
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <h1>My name is {user.name}</h1>
        <h1>My age is {user.username}</h1>
      </div>
    );
  }
}

export default App;
