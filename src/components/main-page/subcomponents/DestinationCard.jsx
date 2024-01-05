import React from "react";
import './DestinationCard.css'
export const DestinationCard = ({ imageDestination, nameDestination }) => {
  /* 
  
    // <section>
    //     <img src={imageDestination} alt={`Imagen ${nameDestination}`} />
    //     <p>{nameDestination}</p>
    // </section>
  
  */
  return (
    <section className="m-auto mb-2 rounded destination-card">
        <img src={imageDestination} alt={`Imagen ${nameDestination}`} className="d-block w-100 rounded" />
        <p className="px-1 rounded-1">{nameDestination}</p>
    </section>
  );
};
