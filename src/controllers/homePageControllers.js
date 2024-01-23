import initModels from '../models/init-models.js';
import sequelize from '../models/connect.js';
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;
const conn = initModels(sequelize);

const getImage = async (req, res) => {
    try {
        const data = await conn.hinh_anh.findAll();
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const getImageByName = async (req, res) => {
    let {imgName} = req.query; 
    try {
        const data = await conn.hinh_anh.findAll({
            where:{ten_hinh:{
                [Op.like]: `%${imgName}%`
            }}
        });
        res.send(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

export {
    getImage,
    getImageByName
}