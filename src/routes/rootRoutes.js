import express from "express";
import homePageRoutes from "./homePageRoutes.js";
import imageManagementRoutes from "./imageManagementRoutes.js";
import authRoutes from "./authRoutes.js";
import detailRoutes from "./detailRoutes.js";

const rootRoutes = express();

rootRoutes.use("/images", homePageRoutes);
rootRoutes.use("/users", imageManagementRoutes);
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/detail", detailRoutes);
export default rootRoutes;
