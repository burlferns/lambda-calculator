import React from "react";

const NumberButton = ( {buttonSymbol} ) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button >
        <span role="img" aria-label="number buttons">
        {buttonSymbol}
        </span>
      </button>



    </>
  );
};


export default NumberButton;