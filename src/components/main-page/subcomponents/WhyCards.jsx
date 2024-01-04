import React from "react";
export const WhyCards = ({
  descriptionCard,
  children,
}) => {
  // d-flex flex-column justify-content-center
  return (
    <div className="border border-light border-2 rounded-circle text-center align-items-center mx-auto mb-3 d-flex flex-column justify-content-center"
    style={{
      width:"200px",
      height:"180px"
    }}
    >
      {children}
      <p
        style={{
          fontSize:"12px",
          margin:"0px 10px"
        }}
      >
        {descriptionCard}
      </p>
    </div>
  );
};
