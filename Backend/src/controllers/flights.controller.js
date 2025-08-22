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

        const response = await axios.get(
            `https://api.aviationstack.com/v1/flights?access_key=${process.env.API_ACCESS_KEY}&dep_iata=${depCity}&arr_iata=${arrCity}`
        );

        const f_data = [];

        const limit =
            response.data.data.length > 10 ? 10 : response.data.data.length;

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
        throw new ApiError(error.status, error.message);
    }
});

export default flightInfo;
