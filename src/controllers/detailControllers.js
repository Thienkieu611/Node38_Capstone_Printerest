import { createToken } from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import nguoi_dung from "../models/nguoi_dung.js";

const conn = initModels(sequelize);

//get-detail
const getInfoDetail = async (req, res) => {
  try {
    let { id } = req.params;

    let detailInfo = await conn.hinh_anh.findOne({
      where: {
        hinh_id: id,
      },
      include: [
        {
          model: nguoi_dung,
          attributes: ["email", "ho_ten", "anh_dai_dien"],
          as: "nguoi_dung",
        },
      ],
    });

    if (detailInfo) {
      let payload = {
        detailInfo,
      };
      let token = createToken(payload);
      res.status(200).send(token);
    } else {
      res.status(404).send("Image is not found !");
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

//get-comment
const getInfoComment = async (req, res) => {
  try {
    let { id } = req.params;

    //check image
    const image = await conn.hinh_anh.findByPk(id);
    if (!image) {
      return res.status(404).send("Image is not found !");
    }

    let comment = await conn.binh_luan.findAll({
      where: {
        hinh_id: id,
      },
      include: [
        {
          model: nguoi_dung,
          attributes: ["ho_ten", "anh_dai_dien"],
          as: "nguoi_dung",
        },
      ],
    });

    if (comment) {
      let payload = {
        comment,
      };
      let token = createToken(payload);
      res.status(200).send(token);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

//get-info-save
const getInfoSave = async (req, res) => {
  try {
    let { id } = req.params;
    let nguoiDungId = req.nguoi_dung.nguoi_dung_id;

    //check image
    const image = await conn.hinh_anh.findByPk(id);
    if (!image) {
      return res.status(404).send("Image is not found !");
    }

    const saveImage = await conn.luu_anh.findOne({
      where: {
        nguoi_dung_id: nguoiDungId,
        hinh_id: id,
      },
    });
    if (saveImage) {
      return res.status(200).send("Image has been saved !");
    } else {
      return res.status(200).send("Image has not been saved !");
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

//create comment
const createComment = async (req, res) => {
  try {
    let { hinh_id, ngay_binh_luan, noi_dung } = req.body;
    let nguoiDungId = req.nguoi_dung.nguoi_dung_id;
    //check image
    // const image = await conn.hinh_anh.findByPk(hinh_id);
    const image = await conn.hinh_anh.findOne({
      hinh_id: hinh_id,
    });
    if (!image) {
      return res.status(404).send("Image is not found !");
    }
    let newComment = {
      nguoi_dung_id: nguoiDungId,
      hinh_id,
      ngay_binh_luan,
      noi_dung,
    };
    const data = await conn.binh_luan.create(newComment);
    let payload = { data };
    let token = createToken(payload);
    res.status(201).send(token);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
export { getInfoDetail, getInfoComment, getInfoSave, createComment };
