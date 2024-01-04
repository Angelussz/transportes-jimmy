import React from "react";

export const DestinationCard = ({ imageDestination, nameDestination }) => {
  /* 
  
    // <section>
    //     <img src={imageDestination} alt={`Imagen ${nameDestination}`} />
    //     <p>{nameDestination}</p>
    // </section>
  
  */
  return (
    <section style={{position:"relative", width:"75%"}} className="m-auto mb-2 pb-2 rounded">
        <img src={imageDestination} alt={`Imagen ${nameDestination}`} className="d-block w-100 rounded" />
        <p style={{position:"absolute", left:"5px",bottom:"0", backgroundColor:"var(--color-jimmy2-500)", fontSize:"10px"}} className="px-1 rounded-1">{nameDestination}</p>
    </section>
  );
};
