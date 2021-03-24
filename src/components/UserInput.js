import React from "react";

function UserInput(props) {
  return (
    <input
      type="text"
      onChange={props.ManageInput}
      value={props.presentName}
      style={style.input}
    />
  );
}

const style = {
  input: {
    border: "7px solid red",
    margin:8,
    padding:8,
    cursor:"pointer"
  },
};
export default UserInput;
