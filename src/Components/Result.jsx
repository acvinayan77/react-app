import React from "react";

function Result({ cal }) {
  return (
    <div className="text-center shadw rounded p-4">
      <div>RESULT</div>
      <div className="row justify-content-md-center">
        <div className="p-1 my-2 alert fs-1 alert-primary col-sm-4">{cal}</div>
      </div>
    </div>
  );
}

export default Result;
