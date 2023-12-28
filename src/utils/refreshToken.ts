import express,{Request,Response} from "express";
import jwt from 'jsonwebtoken'
import {decodeRefreshToken} from "./index";
const SECRET = "secret-key-is-protect";


const refreshRouter = express.Router();
refreshRouter.post("/", (req:Request, res:Response) => {
    const refreshToken:string = req.body.refreshToken;

    try {
        // بررسی معتبر بودن Refresh Token
        const decodedRefresh: any = decodeRefreshToken(refreshToken);

        // اگر Refresh Token معتبر بود، صدور Access Token جدید
        const newAccessToken = jwt.sign({ id: decodedRefresh.id }, SECRET, { expiresIn: "15m" });

        // ارسال Access Token جدید به کلاینت
        res.json({ accessToken: newAccessToken });
    } catch (error) {
        // اگر بررسی ناموفق بود، ارسال خطای مناسب
        res.status(401).json({ message: "Refresh Token نامعتبر است." });
    }
});
