import React, { useState } from "react";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

function App() {
  const [rate, setRate] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const handleSubmit = (e, number) => {
    e.preventDefault();
    setRate(number);
    setIsDone(true);
  };
  return (
    <div className="App">
      {isDone ? <Modal rate={rate} /> : <Form handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
