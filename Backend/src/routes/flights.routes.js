import { Router } from "express";
import flightInfo from "../controllers/flights.controller.js";

const router = Router()

router.route("/").get(flightInfo)

export default router