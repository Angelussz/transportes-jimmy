import React from "react";
import { ServiceCard } from "./subcomponents/ServiceCard";
export const Services = () => {
  return (
    <section
      style={{
        backgroundColor: "var(--color-jimmy1-100)",
      }}
      className="pb-4"
    >
      <h3 style={{color:"var(--color-jimmy1-700)"}} className="text-center pt-2">
        Nuestros servicios
      </h3>
      <div>
        <ServiceCard
          imageSource="/images/servicio-personal.jpg"
          titleService="Transporte de personal"
          descriptionService="Ofrecemos un servicio constante y confiable.Nos enfocamos en diseñar operaciones de transporte en diferentes rubros, liderando las operaciones de transporte de personal de alta Minería cumpliendo con los más altos estándares requeridos."
        />
        <ServiceCard
          imageSource="/images/servicio-interprovincial.jpg"
          titleService="Transporte Interprovincial"
          descriptionService="Servicio que consiste en el transporte regular de personas por carretera, siendo nuestros principales destinos Espinar y Chamaca. Transporte Gerencial: Servicio ejecutivo diseñado para brindar una experiencia de viaje mas exclusiva y personalizada."
        />
        <ServiceCard
          imageSource="/images/servicio-gerencia.jpg"
          titleService="Transporte Gerencial"
          descriptionService="Servicio ejecutivo diseñado para brindar una experiencia de viaje mas exclusiva y personalizada."
        />
        <ServiceCard
          imageSource="/images/servicio-contingencia.jpg"
          titleService="Transporte de Contingencia"
          descriptionService="Transporte especializado ante contingencia social (huelgas o paros), garantizando la continuidad operativa de la unidad minera u empresa."
        />
      </div>
    </section>
  );
};
