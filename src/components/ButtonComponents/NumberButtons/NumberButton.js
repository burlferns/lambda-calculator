import React from "react";

const NumberButton = ( {buttonSymbol, index} ) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className={index===9 ? "zeroBtn" : "nonZeroBtn"}>
        <span role="img" aria-label="number buttons">
        {buttonSymbol}
        </span>
      </button>



    </>
  );
};


export default NumberButton;