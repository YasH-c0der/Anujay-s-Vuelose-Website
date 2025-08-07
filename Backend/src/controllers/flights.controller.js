import asyncHandler from "../utils/asyncHandler.js";
import axios from "axios";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const flightInfo = asyncHandler(async (req, res) => {
    try {
        const { depCity, arrCity } = req.body;

        const response = await axios.get(
            `https://api.aviationstack.com/v1/flights?access_key=${process.env.API_ACCESS_KEY}&dep_iata=${depCity}&arr_iata=${arrCity}`
        );
        // console.log(response.data);
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    response.data.data,
                    "Successfully fetched the details from the api given"
                )
            );
    } catch (error) {
        throw new ApiError(error.status, error.message);
    }
});

export default flightInfo;