import express from "express"
import { getLocations, getLocation , addLocation, deleteLocation , updateLocation } from "../controllers/location.js"

const router = express.Router()

router.get("/", getLocations)
router.get("/:id", getLocation)
router.post("/", addLocation)
router.delete("/:id", deleteLocation)
router.put("/:id", updateLocation)



export default router