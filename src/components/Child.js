import React from "react";

function Child(props) {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <button onClick={props.onButtonClick}>Show Modal</button>
      {props.showModal && <p>Modal is now visible!</p>}
    </div>
  );
}

export default Child;
