import React from "react";

function ValidationComponent(props) {
  // let txtLength = null
  // if(txtLength>5)
  return (
    <div>
      <h1>hey</h1>
      {props.txtL > 5 ? <p>text too long</p> : <p>text too short</p>}
    </div>
  );
}

export default ValidationComponent;
