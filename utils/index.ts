import jwt from "jsonwebtoken";
const SECRET = "secret-key-is-protect";

export const encodeToken = (paylod: any) => {
  const token = jwt.sign(paylod, SECRET, { expiresIn: "30d" });
  return token;
};
export const decodeToken = (token: string) => {
  const decode = jwt.verify(token, SECRET);
  return decode;
};
