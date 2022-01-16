import React, { useState } from "react";

function Form({ getData }) {
  const [calculator, setCalculator] = useState("");
  const getCal = (e) => {
    console.log(e.target.value);
    setCalculator(e.target.value);
    // (e) => setCalculator(e.target.value)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(calculator)
    getData(calculator);
  };
  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">CALCULATOR</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-">
            <div className="my-3">
              <label className="form-label">TYPE HERE :</label>
              <input
                required
                value={calculator}
                onChange={getCal}
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3 button" value="GET RESULT" />
      </form>
    </div>
  );
}

export default Form;
