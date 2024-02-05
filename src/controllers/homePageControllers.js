import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Sequelize } from "sequelize";
import { createToken } from "../config/jwt.js";

const Op = Sequelize.Op;
const conn = initModels(sequelize);

const getImage = async (req, res) => {
  try {
    const data = await conn.hinh_anh.findAll();
    let payload = {
      data,
    };
    let token = createToken(payload);
    res.send(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const getImageByName = async (req, res) => {
  let { imgName } = req.query;
  try {
    const data = await conn.hinh_anh.findAll({
      where: {
        ten_hinh: {
          [Op.like]: `%${imgName}%`,
        },
      },
    });
    let payload = {
      data,
    };
    let token = createToken(payload);
    res.send(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export { getImage, getImageByName };
