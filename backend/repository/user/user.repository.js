const Users = require("../../models/userModel");
const createNewUser = async ({ name, email, password }) => {
  const newUser = new Users({ name, email, password });
  await newUser.save();
};

const deleteUserById = async (id) => {
  return await Users.findByIdAndDelete(id);
};
const getUserByEmail = async (user) => {
  return await Users.findOne({ email });
};

module.exports = {
  deleteUserById,
  createNewUser,
  getUserByEmail,
};
