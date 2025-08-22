import { Router } from "express";
import flightInfo from "../controllers/flights.controller.js";

const router = Router()

router.route("/info").post(flightInfo)

export default router