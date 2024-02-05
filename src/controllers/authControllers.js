import { createToken } from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import bcrypt from "bcrypt";

const conn = initModels(sequelize);
//login
const login = async (req, res) => {
  try {
    //Lấy email, pass. Sau đó check email có tồn tại không
    let { email, mat_khau } = req.body;

    let data = await conn.nguoi_dung.findOne({
      where: {
        email: email,
      },
    });

    //Tồn tại email thì check pass
    if (data) {
      console.log(data.mat_khau);
      let checkPassword = bcrypt.compareSync(mat_khau, data.mat_khau);
      //console.log(checkPassword);
      if (checkPassword) {
        let payload = {
          nguoi_dung_id: data.nguoi_dung_id,
        };
        let token = createToken(payload);
        res.status(200).send(token);
      } else {
        res.status(400).send("Password is not correct !");
      }
    } else {
      res.status(404).send("Email is not exist !");
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

//signup
const signUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi } = req.body;

    // Kiểm tra email đã tồn tại trong db chưa
    let data = await conn.nguoi_dung.findOne({
      where: {
        email: email,
      },
    });
    if (data) {
      res.status(400).send("Email is existed !");
    } else {
      // mã hoá pass
      let encodePassword = bcrypt.hashSync(mat_khau, 10);
      let newUser = {
        email,
        mat_khau: encodePassword,
        ho_ten,
        tuoi,
      };
      const data = await conn.nguoi_dung.create(newUser);
      let payload = {
        data,
      };
      let token = createToken(payload);

      res.status(201).send(token);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

export { login, signUp };
