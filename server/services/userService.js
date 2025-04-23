// filepath: c:\Nikhil\Hackathon\Perplexity\TrueRX\server\services\userService.js
import User from "../models/userModel.js";

export const findAllUsers = async () => {
  return await User.find({});
};

export const findUserById = async (id) => {
  return await User.findById(id);
};

export const createNewUser = async (userData) => {
  const { name, email, password } = userData;
  return await User.create({
    name,
    email,
    password,
  });
};