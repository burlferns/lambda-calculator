import React from "react";

const SpecialButton = ( {buttonSymbol} ) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button >
        <span role="img" aria-label="special buttons">
        {buttonSymbol}
        </span>
      </button>




    </>
  );
};


export default SpecialButton;