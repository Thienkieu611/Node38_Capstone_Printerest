import express from "express";
import {
  createImage,
  deleteImageById,
  editUserInformation,
  getListImageCreatedById,
  getListImageSavedById,
  getUserInformation,
} from "../controllers/imageManageControllers.js";
import { blockApi } from "../config/jwt.js";

const imageManagementRoutes = express.Router();

imageManagementRoutes.get("/information", getUserInformation);
imageManagementRoutes.get("/image-saved", blockApi, getListImageSavedById);
imageManagementRoutes.get("/image-created", blockApi, getListImageCreatedById);
imageManagementRoutes.delete("/delete-image", blockApi, deleteImageById);
imageManagementRoutes.put("/edit-information", editUserInformation);
imageManagementRoutes.post("/create-image", blockApi, createImage);

export default imageManagementRoutes;
