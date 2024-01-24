import { Sequelize } from "sequelize";
import initModels from '../models/init-models.js'
import sequelize from '../models/connect.js'

const Op = Sequelize.Op;
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

const editUserInformation = async (req, res) => {
    let { userId } = req.query;
    let { email, password, full_name, age, avatar } = req.body;
    let editData = {
        email,
        mat_khau: password,
        ho_ten: full_name,
        tuoi: age,
        anh_dai_dien: avatar,
    };
    try {
        let existEmail = await conn.nguoi_dung.findOne({
            where: {
                email: editData.email
            }
        });
        if (existEmail) {
            res.status(400).send('Email is existed!')
        } else {
            await conn.nguoi_dung.update(editData, {
                where: {
                    nguoi_dung_id: `${userId}`
                }
            });
            res.status(200).send('Updated successfull!');
        }
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

export {
    getUserInformation,
    getListImageSavedById,
    getListImageCreatedById,
    deleteImageById,
    editUserInformation
}