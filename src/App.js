import React, { useState } from "react";
import UserOutput from "./components/UserOutput";

function App() {
  const [name, setName] = useState([
    { name: "alice", id: 1 },
    { name: "yaya", id: 2 },
    { name: "frank", id: 3 },
  ]);
  const [showPerson, setShowPerson] = useState(false);

  const personToggler = () => {
    setShowPerson(!showPerson);
  };
  let person = null;

  const onDelete = (id) => {
    const newPerson = [...name];
    
    newPerson.splice(id,1)
    setName(newPerson)
   console.log(newPerson);
   console.log(name);
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

  return (
    <div>
      <button onClick={personToggler}>Click to Show</button>
      {person}
    </div>
  );
}

export default App;
