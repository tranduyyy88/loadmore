import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { map } from "rxjs/operators";
const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response.data);
        //set data 
      })
      .catch(function (error) {})
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <section className="feed">
      <h1>Simple Load More/Pagination with React</h1>
      <h2>With Array.prototype.slice() and the power of component state!</h2>

      <div className="tiles" aria-live="polite">
        {data.map((item, index) => {
          return (
            <div className="tile fade-in" key={item.id}>
              <span className="count">{index + 1}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Content;
