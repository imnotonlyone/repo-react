import React from "react";
import Card from "./components/Card";

function App3() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* 1 */}
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "First Post",
                published: "06 feb 2022",
              }}
            />
          </div>

          <div className="col-md-4">
            {/* 2 */}
            <Card
              content={{
                imageUrl: "http://placekitten.com//300/200",
                title: "First Post",
                published: "06 feb 2021",
              }}
            />
          </div>

          <div className="col-md-4">
            {/* 3 */}
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/100/200",
                title: "First Post",
                published: "06 feb 2023",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App3;
