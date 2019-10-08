import React from "react";

const OperatorButton = ( {buttonSymbol} ) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className="operatorBtns">
        <span role="img" aria-label="operator buttons">
        {buttonSymbol}
        </span>
      </button>





    </>
  );
};

export default OperatorButton;