import express from "express";
import { getImage, getImageByName } from "../controllers/homePageControllers.js";

const homePageRoutes = express.Router();

homePageRoutes.get('/get-image', getImage);
homePageRoutes.get('/find-image', getImageByName)

export default homePageRoutes;