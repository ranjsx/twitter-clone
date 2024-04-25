import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 100, //milliseconds or MS
    httpOnly: true, // to prevent xss attacks cross-site / scripting attacks
    sameSite: "strict", // to prevent CSRF attacks cross-site req forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};
