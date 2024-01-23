import { Sequelize } from "sequelize";
import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'

const conn = initModels(sequelize);

const getUserInformation = async (req, res) => {
    let { userId } = req.query;
    try {
        const data = await conn.nguoi_dung.findByPk(userId);
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const getListImageSavedById = async (req, res) => {
    let { userId } = req.query;
    try {
        const data = await conn.nguoi_dung.findByPk(userId, {
            include: ['luu_anhs']
        });
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const getListImageCreatedById = async (req, res) => {
    let { userId } = req.query;
    try {
        const data = await conn.nguoi_dung.findByPk(userId, {
            include: ['hinh_anhs']
        });
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const deleteImageById = async (req, res) => {
    let { imageId } = req.query;
    try {
        await conn.hinh_anh.destroy({
            where: {
                hinh_id: imageId
            }
        });
        res.send('Image was deleted successfull!');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};


export {
    getUserInformation,
    getListImageSavedById,
    getListImageCreatedById,
    deleteImageById
}