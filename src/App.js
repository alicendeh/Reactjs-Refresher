import React, { useState } from "react";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";

function App() {
  const [name, setName] = useState({
    userName: "AKumah",
  });

  const ManageInput = (e) => {
    setName({
      userName: e.target.value,
    });
  };

  return (
    <div>
      <UserInput ManageInput={ManageInput} presentName={name.userName}
      style={style}
      />
      <UserOutput name={name.userName} />
      <UserOutput name={name.userName} />
      <UserOutput name="Paul" />
    </div>
  );
}

const style = {
  
    border: "1px solid yellow",
  
};

export default App;
