import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, config.SECRET);
  } catch (e) {
    return res.status(403).json({ message: "Incorrect token provided" });
  }

  let idUser = decoded.id ? decoded.id : "";

  const user = await User.findById(idUser);
  console.log(user);
  if (!user) return res.status(404).json({ message: "No user found" });

  next();
};
