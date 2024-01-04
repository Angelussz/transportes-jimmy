import React from "react";
import { WhyCards } from "./subcomponents/WhyCards";
import { BsFillBookmarkStarFill, BsPersonFillGear } from "react-icons/bs";
import { HiUserGroup, HiBuildingOffice } from "react-icons/hi2";
import { IoBus } from "react-icons/io5";
import "./Why.css";
const iconsStyle = {
  color: "var(--color-jimmy1-300)",
  fontSize: "250%",
  marginBottom: "20px",
};
export const Why = () => {
  return (
    <section className="why pb-2">
      <p className="title rounded mb-0">Transportes Jimmy</p>
      <h3>¿Porque Viajar con transportes Jimmy?</h3>
      <section>
        <WhyCards descriptionCard="Servicio de alta calidad y seguridad.">
          <BsFillBookmarkStarFill style={iconsStyle} />
        </WhyCards>
        <WhyCards descriptionCard="Nos adecuamos a las necesidades del cliente">
          <HiUserGroup style={iconsStyle} />
        </WhyCards>
        <WhyCards descriptionCard="Más de 20 años de experienciaen el rubro.">
          <BsPersonFillGear style={iconsStyle} />
        </WhyCards>
        <WhyCards descriptionCard="Experiencia de viaje única">
          <IoBus style={iconsStyle}  />
        </WhyCards>
        <WhyCards descriptionCard="Contamos con nuestras propias oficinas de embarque ubicados en los principales terminales terrestres de la ciudad.">
          <HiBuildingOffice style={iconsStyle}  />
        </WhyCards>
        {/* 
        <WhyCards sourceImage="../../public/images/20-experiencia.svg" descriptionImage="Icono 20 años experiencia" descriptionCard="Más de 20 años de experienciaen el rubro." />
        <WhyCards sourceImage="../../public/images/experiencia-viaje-unica.svg" descriptionImage="Icono experiencia de viaje" descriptionCard="Experiencia de viaje única" />
        <WhyCards sourceImage="../../public/images/contamos-oficinas.svg" descriptionImage="Icono propias oficinas" descriptionCard="Contamos con nuestras propias oficinas de embarque ubicados en los principales terminales terrestres de la ciudad." /> */}
      </section>
    </section>
  );
};
