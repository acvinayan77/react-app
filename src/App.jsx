import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Result from "./Components/Result";

function App() {
  const [cal, setCal] = useState("");
  const [show, setShow] = useState(false);
  const onFormSub = (c) => {
    let ca = calculate(c);
    setCal(ca);
    setShow(true);
    console.log(c);
  };
  const calculate = (c) => {
    return eval(c);
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={onFormSub} />
        </div>
        {show && <Result cal={cal} />}
      </div>
    </div>
  );
}

export default App;
