import { Sequelize } from "sequelize";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { createToken } from "../config/jwt.js";

const Op = Sequelize.Op;
const conn = initModels(sequelize);

const getUserInformation = async (req, res) => {
  let { userId } = req.query;
  try {
    const data = await conn.nguoi_dung.findByPk(userId);
    const payload = {
      data,
    };
    let token = createToken(payload);
    res.status(200).send(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const getListImageSavedById = async (req, res) => {
  let { userId } = req.query;
  try {
    const data = await conn.nguoi_dung.findByPk(userId, {
      include: ["luu_anhs"],
    });
    let payload = {
      data,
    };
    let token = createToken(payload);
    res.status(200).send(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const getListImageCreatedById = async (req, res) => {
  let { userId } = req.query;
  try {
    const data = await conn.nguoi_dung.findByPk(userId, {
      include: ["hinh_anhs"],
    });
    let payload = {
      data,
    };
    let token = createToken(payload);
    res.status(200).send(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const deleteImageById = async (req, res) => {
  let { imageId } = req.query;
  try {
    await conn.hinh_anh.destroy({
      where: {
        hinh_id: imageId,
      },
    });
    res.send("Image was deleted successfull!");
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
        email: editData.email,
      },
    });
    if (existEmail) {
      res.status(400).send("Email is existed!");
    } else {
      await conn.nguoi_dung.update(editData, {
        where: {
          nguoi_dung_id: `${userId}`,
        },
      });
      let payload = {
        email,
        password,
      };
      let token = createToken(payload);
      res.status(200).send(token);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const createImage = async (req, res) => {
  try {
    let nguoiDungId = req.nguoi_dung.nguoi_dung_id;
    let { ten_hinh, duong_dan, mo_ta } = req.body;

    let newImage = {
      ten_hinh,
      duong_dan,
      mo_ta,
      nguoi_dung_id: nguoiDungId,
    };
    const data = await conn.hinh_anh.create(newImage);
    let payload = { data };
    let token = createToken(payload);
    res.status(201).send(token);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

export {
  getUserInformation,
  getListImageSavedById,
  getListImageCreatedById,
  deleteImageById,
  editUserInformation,
  createImage,
};
