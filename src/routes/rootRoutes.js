import express from "express";
import homePageRoutes from "./homePageRoutes.js";
import imageManagementRoutes from "./imageManagementRoutes.js";

const rootRoutes = express();

rootRoutes.use('/images', homePageRoutes);
rootRoutes.use('/users', imageManagementRoutes);

export default rootRoutes;
