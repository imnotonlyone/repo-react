import React from "react";
import { Component } from "react";

class App1 extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      name: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`,
    });
    this.setState({
      firstname: "",
    });
    this.setState({
      lastname: "",
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="p-5">
        <h1 text-center>APP button SHOW</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn ReactJS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        value={this.state.firstname}
                        onChange={this.changeHandler}
                        name="firstname"
                        id="firstname"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={this.state.lastname}
                        onChange={this.changeHandler}
                        name="lastname"
                        id="lastname"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">
                      SHOW
                    </button>
                  </form>
                </div>

                <div className="card-footer">
                  My Name is {name ? name : ". . ."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App1;
