// export const encodeToken = (paylod: any) => {
    //   const token = jwt.sign(paylod, SECRET, { expiresIn: "30d" });
    //   return token;
    // };
    // export const decodeToken = (token: string) => {
        //   const decode = jwt.verify(token, SECRET);
        //   return decode;
        // };
        

import jwt from "jsonwebtoken";
const SECRET = "secret-key-is-protect";
const REFRESH_SECRET = "refresh-secret-key-is-secure";

export const encodeTokens = (payload: any) => {
    // Create an access token with a shorter expiration time (15 minutes)
    const accessToken = jwt.sign(payload, SECRET, { expiresIn: "15m" });
  
    // Create a refresh token with a longer expiration time ( 7 days)
    const refreshToken = jwt.sign(payload, REFRESH_SECRET, { expiresIn: "2d" });
  
    return { accessToken, refreshToken };
  };
export const decodeAccessToken = (accessToken: string) => {
    const decoded = jwt.verify(accessToken, SECRET);
    return decoded;
};
