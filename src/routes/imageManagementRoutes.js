import express from 'express';
import { deleteImageById, editUserInformation, getListImageCreatedById, getListImageSavedById, getUserInformation } from '../controllers/imageManageControllers.js';
import { blockApi } from '../config/jwt.js';

const imageManagementRoutes = express.Router();

imageManagementRoutes.get('/information', getUserInformation);
imageManagementRoutes.get('/image-saved',blockApi, getListImageSavedById);
imageManagementRoutes.get('/image-created',blockApi, getListImageCreatedById);
imageManagementRoutes.post('/delete-image',blockApi, deleteImageById);
imageManagementRoutes.put('/edit-information', editUserInformation);

export default imageManagementRoutes;