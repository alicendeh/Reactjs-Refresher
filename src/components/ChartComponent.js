import React from "react";

function ChartComponent(props) {
  return (
    <div>
      {props.letters.split("").map((letter) => {
        return (
          <div style={chart}>
            <h4> {letter} </h4>
          </div>
        );
      })}
    </div>
  );
}
const chart = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black",
};

export default ChartComponent;
