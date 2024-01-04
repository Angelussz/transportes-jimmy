import React from "react";

export const ServiceCard = ({
  imageSource,
  titleService,
  descriptionService,
}) => {
  return (
    <section
      className="card col-6 offset-1 mb-2 mx-auto shadow rounded"
      style={{ width: "13rem", backgroundColor: "inherit" }}
    >
      <img
        src={imageSource}
        className="card-img-top"
        alt={`Imagen ${titleService}`}
      />
      <div className="card-body">
        <h4 className="card-title text-center fw-bolder " style={{color:"var(--color-jimmy1-950)"}}>{titleService}</h4>
        <p className="card-text d-none">{descriptionService}</p>
        
      </div>
    </section>
  );
};
