import express from "express";
import {
  createComment,
  getInfoComment,
  getInfoDetail,
  getInfoSave,
} from "../controllers/detailControllers.js";
import { blockApi } from "../config/jwt.js";

const detailRoutes = express.Router();

detailRoutes.get("/get-detail/:id", getInfoDetail);
detailRoutes.get("/get-comment/:id", getInfoComment);
detailRoutes.get("/get-info-save/:id", blockApi, getInfoSave);
detailRoutes.post("/create-comment", blockApi, createComment);

export default detailRoutes;
