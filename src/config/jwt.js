import jwt from "jsonwebtoken";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const createToken = (data) => {
  return jwt.sign(data, "node38_capstone_printerest", { expiresIn: "1y" });
};

const checkToken = (token) => {
  return jwt.verify(token, "node38_capstone_printerest", (err, decoded) => {
    if (err) {
      return {
        statusCode: 401,
        message: "Invalid token",
      };
    }
    return {
      statusCode: 200,
      data: decoded,
    };
  });
};

const blockApi = async (req, res, next) => {
  let { token } = req.headers;
  if (token) {
    let verifyToken = checkToken(token);
    if (verifyToken.statusCode == 401) {
      res.status(401).send("Invalid token");
      return;
    }
    let { nguoi_dung_id } = verifyToken.data;

    //check user_id có tồn tại trong db hay không
    let checkUser = await conn.nguoi_dung.findOne({
      where: {
        nguoi_dung_id: nguoi_dung_id,
      },
    });

    if (!checkUser) {
      res.status(401).send("Invalid token");
      return;
    }

    req.nguoi_dung = {
      nguoi_dung_id: nguoi_dung_id,
    };

    next();
  } else {
    res.status(401).send("Unauthorized");
    return;
  }
};

export { createToken, checkToken, blockApi };
