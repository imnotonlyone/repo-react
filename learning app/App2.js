import React, { useState } from "react";
// import { Component } from "react";

function App2() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setName(`${firstname} ${lastname}`);

    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Learn React Function</div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      name="firstname"
                      id="firstname"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      name="lastname"
                      id="lastname"
                      className="form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-block btn-primary">
                    SHOW
                  </button>
                </form>
              </div>
              <div className="card-footer">
                My Name is  {name ? name : ". . . "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
