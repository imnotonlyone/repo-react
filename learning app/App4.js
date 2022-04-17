import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function App4(props) {
  const [user, setUser] = useState([]);
  const [indentifier, setindetifier] = useState(1);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${indentifier}`
      );
      setUser(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [indentifier]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <input
              type="text"
              name="indentifier"
              value={indentifier}
              onChange={(e) => setindetifier(e.target.value)}
              className="form-control"
            />
            {loading ? (
              <div>Loading ...</div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>website</th>
                    <th>phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.phone}</td>
                  </tr>
                  {/*{users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.phone}</td>
                    </tr>
                  );
                })} */}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App4;
