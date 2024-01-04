import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
export const Contacts = () => {
  return (
    <section
      style={{
        backgroundColor: "var(--color-jimmy2-400)",
        color: "var(var(--color-jimmy2-950)",
      }}
    >
      <h3>Contactate con nosotros</h3>
      <div>
        <div className="d-flex justify-content-center  align-items-center text-center">
          <div className="flex-grow-2" style={{width:"50%"}}>
            <FaPhoneAlt style={{ fontSize: "200%" }}  />
          </div>
          <div className="">
            <h6>Transporte interprovincial</h6>
            <p>
              Atención al cliente y Reserva de boletos: <b>950 551 455</b>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center text-center">
        <div className="flex-grow-2" style={{width:"30%"}} >
            <FaPhoneAlt style={{ fontSize: "200%" }} />
          </div>
          <div>
            <h6>Transporte corporativo de personal</h6>
            <p>
              Llamanos al: <b>983 110 015</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
