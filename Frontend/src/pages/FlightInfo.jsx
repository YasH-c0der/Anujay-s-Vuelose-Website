import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import FlightCard from "../components/FlightCard";
import FlightContext from "../assets/context/FlightContext";
import { useContext } from "react";

// Progressive Blur Component in magic ui

function FlightInfo() {
  const {flight_data, setflight_data} = useContext(FlightContext)

  return (
      <>
        <HeroSection />
        {flight_data.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </>
  );
}

export default FlightInfo;
