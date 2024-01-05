import React from "react";
import { DestinationCard } from "./subcomponents/DestinationCard";

export const Destinations = () => {
  return (
    <section
      style={{
        backgroundColor: "var( --color-jimmy1-600)",
        color: "var(--color-jimmy1-100)",
      }}
      className="py-2"
    >
      <h3>Destinos</h3>
      <div className="d-md-flex d-wrap">
        <DestinationCard
          imageDestination="/images/destino-espinar.jpg"
          nameDestination="ESPINAR"
        />
        <DestinationCard
          imageDestination="/images/destino-chamaca.jpeg"
          nameDestination="CHAMACA"
        />

      </div>
    </section>
  );
};
