import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import FlightCard from "../components/FlightCard";
import FlightContext from "../assets/context/FlightContext";
import { useContext } from "react";

// Progressive Blur Component in magic ui

function FlightInfo() {
  const [flight_data, setflight_data] = useContext(FlightContext)
  
  // useState([
  //   {
  //     f_num: "9677",
  //     f_depDate: "2025-08-22",
  //     f_depTime: "04:30:00",
  //     f_depCity: "SZX",
  //     f_arrDate: "2025-08-22",
  //     f_arrTime: "08:10:00",
  //     f_arrCity: "AUH",
  //   },
  //   {
  //     f_num: "7048",
  //     f_depDate: "2025-08-22",
  //     f_depTime: "04:25:00",
  //     f_depCity: "SZX",
  //     f_arrDate: "2025-08-22",
  //     f_arrTime: "05:50:00",
  //     f_arrCity: "FOC",
  //   },
  //   {
  //     f_num: "341",
  //     f_depDate: "2025-08-22",
  //     f_depTime: "03:30:00",
  //     f_depCity: "SZX",
  //     f_arrDate: "2025-08-22",
  //     f_arrTime: "07:45:00",
  //     f_arrCity: "KIX",
  //   },
  // ]);

  return (
    // <FlightContext.Provider value={{ flight_data, setflight_data }}>
      <>
        <HeroSection />
        {flight_data.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </>
    // </FlightContext.Provider>
  );
}

export default FlightInfo;
