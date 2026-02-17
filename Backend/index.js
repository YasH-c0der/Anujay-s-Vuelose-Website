import cors from "cors";
import cookieParser from "cookie-parser";
import flightRouter from "./src/routes/flights.routes.js";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";
import userRouter from "./src/routes/user.routes.js";

dotenv.config({
    path: "./.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use("/api/v1/flights", flightRouter);
app.use("/api/v1/users", userRouter);

app.get("/api/v1", (req, res) => {
    console.log("Hello World!!");
});



connectDB().then(() => {
    app.listen(process.env.PORT, (req, res) => {
        console.log("Sever started at ", process.env.PORT);
    });
});
