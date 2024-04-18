import React from "react";

function OperationSelection({ onSelect }) {
  return (
    <div className="operation-selection">
      <h2>Select Operation</h2>
      <button onClick={() => onSelect("addition")}>Addition</button>
      <button onClick={() => onSelect("subtraction")}>Subtraction</button>
    </div>
  );
}

export default OperationSelection;
