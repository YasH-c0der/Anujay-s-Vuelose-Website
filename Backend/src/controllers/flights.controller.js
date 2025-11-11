import asyncHandler from "../utils/asyncHandler.js";
import axios from "axios";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const flightInfo = asyncHandler(async (req, res) => {
    // flight number
    // flight departure date
    // flight departure time
    // flight departure city
    // flight arrival date
    // flight arrival time
    // flight arrival city

    try {
        const { depCity, arrCity } = req.body;

        const response = await axios
            .get(
                `https://api.aviationstack.com/v1/flights?access_key=${process.env.API_ACCESS_KEY}&dep_iata=${depCity}&arr_iata=${arrCity}`
            )
            .catch((error) => {
                // console.log(error.message);
                console.log("SOmething went wrong while calling the API");
            });

        if (!response) {
            response = [
                {
                    flight_date: "2025-08-22",
                    flight_status: "landed",
                    departure: {
                        airport: "Indira Gandhi International",
                        timezone: "Asia/Kolkata",
                        iata: "DEL",
                        icao: "VIDP",
                        terminal: "3",
                        gate: "30B",
                        delay: 10,
                        scheduled: "2025-08-22T05:10:00+00:00",
                        estimated: "2025-08-22T05:10:00+00:00",
                        actual: "2025-08-22T05:19:00+00:00",
                        estimated_runway: "2025-08-22T05:19:00+00:00",
                        actual_runway: "2025-08-22T05:19:00+00:00",
                    },
                    arrival: {
                        airport:
                            "Chhatrapati Shivaji International (Sahar International)",
                        timezone: "Asia/Kolkata",
                        iata: "BOM",
                        icao: "VABB",
                        terminal: "2",
                        gate: null,
                        baggage: "1",
                        scheduled: "2025-08-22T07:35:00+00:00",
                        delay: null,
                        estimated: "2025-08-22T07:07:00+00:00",
                        actual: "2025-08-22T07:10:00+00:00",
                        estimated_runway: "2025-08-22T07:10:00+00:00",
                        actual_runway: "2025-08-22T07:10:00+00:00",
                    },
                    airline: {
                        name: "Lufthansa",
                        iata: "LH",
                        icao: "DLH",
                    },
                    flight: {
                        number: "5284",
                        iata: "LH5284",
                        icao: "DLH5284",
                        codeshared: {
                            airline_name: "air india",
                            airline_iata: "ai",
                            airline_icao: "aic",
                            flight_number: "2975",
                            flight_iata: "ai2975",
                            flight_icao: "aic2975",
                        },
                    },
                    aircraft: null,
                    live: null,
                },
                {
                    flight_date: "2025-08-22",
                    flight_status: "landed",
                    departure: {
                        airport: "Indira Gandhi International",
                        timezone: "Asia/Kolkata",
                        iata: "DEL",
                        icao: "VIDP",
                        terminal: "3",
                        gate: "30B",
                        delay: 10,
                        scheduled: "2025-08-22T05:10:00+00:00",
                        estimated: "2025-08-22T05:10:00+00:00",
                        actual: "2025-08-22T05:19:00+00:00",
                        estimated_runway: "2025-08-22T05:19:00+00:00",
                        actual_runway: "2025-08-22T05:19:00+00:00",
                    },
                    arrival: {
                        airport:
                            "Chhatrapati Shivaji International (Sahar International)",
                        timezone: "Asia/Kolkata",
                        iata: "BOM",
                        icao: "VABB",
                        terminal: "2",
                        gate: null,
                        baggage: "1",
                        scheduled: "2025-08-22T07:35:00+00:00",
                        delay: null,
                        estimated: "2025-08-22T07:07:00+00:00",
                        actual: "2025-08-22T07:10:00+00:00",
                        estimated_runway: "2025-08-22T07:10:00+00:00",
                        actual_runway: "2025-08-22T07:10:00+00:00",
                    },
                    airline: {
                        name: "Air India",
                        iata: "AI",
                        icao: "AIC",
                    },
                    flight: {
                        number: "2975",
                        iata: "AI2975",
                        icao: "AIC2975",
                        codeshared: null,
                    },
                    aircraft: null,
                    live: null,
                },
            ];
            // throw new ApiError(401, "Api didn tgive any response");
        }
        const f_data = [];

        const limit =
            response.data.data.length > 10 ? 10 : response.data.data.length;

        function getTimeDifference(startTime, endTime) {
            // Convert both times to Date objects
            const start = new Date(startTime);
            const end = new Date(endTime);

            // Get difference in milliseconds
            let diff = end - start;

            // If end time is earlier than start time, assume next day
            if (diff < 0) {
                diff += 24 * 60 * 60 * 1000;
            }

            // Convert to hours, minutes, seconds
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const hh = String(hours).padStart(2, "0");
            const mm = String(minutes).padStart(2, "0");

            return `${hh}:${mm}`;
        }

        for (let i = 0; i < limit; i++) {
            const element = {
                f_num: response.data?.data[i]?.flight.number,
                f_depDate: response.data?.data[i]?.flight_date,
                f_depTime: response.data?.data[i]?.departure.scheduled
                    ?.split("T")[1]
                    ?.split("+")[0]
                    ?.slice(0, 5),
                f_depCity: response.data?.data[i]?.departure.iata,
                f_arrDate: response.data?.data[i]?.flight_date,
                f_arrTime: response.data?.data[i]?.arrival.scheduled
                    ?.split("T")[1]
                    ?.split("+")[0]
                    ?.slice(0, 5),
                f_arrCity: response.data?.data[i]?.arrival.iata,
                f_duration: getTimeDifference(
                    response.data?.data[i]?.departure.scheduled,
                    response.data?.data[i]?.arrival.scheduled
                ),
            };

            f_data.push(element);
        }

        // console.log(response.data);
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    f_data,
                    "Successfully fetched the details from the api given"
                )
            );
    } catch (error) {
        // res.send("Error",error.message, error.status)
        throw new ApiError(error.status, error.message);
    }
});

export default flightInfo;
