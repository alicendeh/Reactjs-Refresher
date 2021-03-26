import React, { useState } from "react";
import UserOutput from "./components/UserOutput";
import "./App.css";

function App() {
  const [name, setName] = useState([
    { name: "alice", id: 1 },
    { name: "yaya", id: 2 },
    { name: "frank", id: 3 },
  ]);
  const [showPerson, setShowPerson] = useState(false);
  const [clr, setClr] = useState("red");

  const personToggler = () => {
    setShowPerson(!showPerson);
  };
  let person = null;

  const onDelete = (id) => {
    const newPerson = [...name];
    newPerson.splice(id, 1);
    setName(newPerson);
  };

  if (showPerson) {
    person = (
      <div>
        {name.map((personName, index) => {
          return (
            <div key={personName.name}>
              <UserOutput
                name={personName.name}
                click={() => onDelete(index)}
              />
            </div>
          );
        })}
      </div>
    );
  }
  let count = name.length
  console.log(count);

  return (
    <div>
      <h1
      style= {{
        color:(count>=3)?"black":"red",
        fontWeight:"bold",
      }}
      >Its really working</h1>
      <button
        onClick={personToggler}
        style={{
          backgroundColor: showPerson ? "red" : "green",
          padding: 12,
          color: "white",
          fontSize: 22,
        }}
      >
        Click to Show
      </button>
      {person}
    </div>
  );
}



export default App;

