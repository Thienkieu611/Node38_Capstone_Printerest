import express from 'express';
import { deleteImageById, editUserInformation, getListImageCreatedById, getListImageSavedById, getUserInformation } from '../controllers/imageManageControllers.js';

const imageManagementRoutes = express.Router();

imageManagementRoutes.get('/information', getUserInformation);
imageManagementRoutes.get('/image-saved', getListImageSavedById);
imageManagementRoutes.get('/image-created', getListImageCreatedById);
imageManagementRoutes.post('/delete-image', deleteImageById);
imageManagementRoutes.put('/edit-information', editUserInformation);

export default imageManagementRoutes;