import jwt from 'jsonwebtoken';
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const createToken = (data) => {
    return jwt.sign(data, "node38_capstone_printerest", { expiresIn: "1y" })
};

const checkToken = (token) => {
    return jwt.verify(token, "node38_capstone_printerest", (err, decoded) => {
        if (err) {
            return {
                statusCode: 401,
                message: "Invalid token"
            }
        }
        return {
            statusCode: 200,
            data: decoded
        }
    })
};

const blockApi = async (req, res, next) => {
    let { token } = req.headers;
    if (token) {
        let verifyToken = checkToken(token);
        if (verifyToken.statusCode == 401) {
            res.status(401).send("Invalid token")
            return
        }
        let { user_id } = verifyToken.data;
        let checkUser = await conn.nguoi_dung.findOne({
            where: {
                nguoi_dung_id: user_id
            }
        })
        if (!checkUser) {
            res.status(401).send("Invalid token")
            return
        }
        next();
    } else {
        res.status(401).send("Unauthorized");
        return
    }
};

export {
    createToken,
    checkToken,
    blockApi
};