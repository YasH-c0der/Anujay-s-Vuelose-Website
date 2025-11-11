import React, { useContext } from "react";
import "../assets/css/Flight_card.css"


export default function FlightCard({flight}) {
  
  return (
    <>
      <div className="f_card">
        <div className="f_airline">
            <div>
                AI {flight.f_num}
            </div>
        </div>

        <hr width="100%" />

        <div className="f_flight_details">
            <div className="f_departure">
                <div className="f_departure_date f_date">
                    <div>
                        {flight.f_depDate}
                    </div>
                </div>
                <div className="f_departure_time f_time">
                    <div>
                        {flight.f_depTime}
                    </div>
                </div>
                <div className="f_departure_city f_city">
                    <div>
                        {flight.f_depCity}
                    </div>
                </div>
            </div>
            <div className="f_duration">
                <div className="f_duration_line1">
                    <span className="f_flight1_img"></span>
                    <span className="f_flight1_img_dash"> -------- </span>
                    <span className="f_duration_time">{JSON.stringify(flight.f_duration)}</span>
                    <span className="f_flight2_img_dash"> -------- </span>
                    <span className="f_flight2_img"></span>
                </div>
            </div>
            <div className="f_arrival">
                <div className="f_arrival_date f_date">
                    <div>
                      {flight.f_arrDate}
                    </div>
                </div>
                <div className="f_arrival_time f_time">
                    <div>
                        {flight.f_arrTime}
                    </div>
                </div>
                <div className="f_arrival_city f_city">
                    <div>
                        {flight.f_arrCity}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
