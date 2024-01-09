import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import './Contacts.css'
export const Contacts = () => {
  return (
    <section
      className="contacts-container position-relative"
      style={{
        backgroundColor: "var(--color-jimmy2-400)",
        color: "var(var(--color-jimmy2-950)",
      }}
    >
      <div className="contacts-left-content">
        <img
          src="/images/contacts-image.png"
          className="contact-img d-none d-xxl-block"
          alt="Images Contact"
        />
      </div>
      <div className="contact-right-content py-sm-3 py-md-5">
        <div className="content-text p-md-5 py-5 px-3">
          <h3 className="text-md-start mb-5">Mantente en Contacto con Nosotros</h3>
          <p className="text-start mb-5 d-none d-sm-block ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus tenetur error voluptatum, minima accusamus dolorum quis officiis non vero, facere quia magnam nihil? Iure id quaerat delectus vero? Accusantium, esse.
          Nostrum sed nihil incidunt facilis eveniet accusamus nam officiis, totam tempore a ipsum maiores dicta saepe minima consectetur, libero vero consequuntur odio. Culpa, praesentium vel in ratione saepe suscipit deleniti.
          Molestias, voluptatibus in voluptate nostrum perferendis exercitationem ullam alias nisi totam adipisci iste debitis porro dolorum quia recusandae delectus atque veniam quaerat saepe. Recusandae, repellendus fugiat! Excepturi tempore nesciunt quo?</p>
          <div className="d-sm-flex justify-content-sm-between">
            <div className="d-flex justify-content-center  align-items-center text-center mx-auto contacto">
              
              <div className="w-25">
                <FaPhoneAlt style={{ fontSize: "200%" }}  />
              </div>
              <div className="">
                <h6>Transporte interprovincial</h6>
                <p>
                  Atención al cliente y Reserva de boletos: <b>950 551 455</b>
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center text-center mx-auto contacto">
              <div className="w-25">
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
        </div>
      </div>
    </section>
  );
};
