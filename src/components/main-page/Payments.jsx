import React from "react";

export const Payments = () => {
  return (
    <section className="py-2" style={{backgroundColor:"var( --color-jimmy1-100)"}}>
      <h3 style={{color:"var( --color-jimmy1-600)"}} >Medios de Pago</h3>
      <div className="">
        <img src="/images/pago-yape.png" alt="pago yape" className="d-block w-50 m-auto" />
        <img src="/images/pago-plin.png" alt="pago plin" className="d-block w-50 m-auto" />
        
        <img
          src="/images/pago-transferencia-bancaria.png"
          alt="pago transferencia bancaria"
          className="d-block w-50 m-auto"
        />
      </div>
    </section>
  );
};
