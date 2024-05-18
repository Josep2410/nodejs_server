const User = require('../model/User')

// query all users
const getAllUsers = async (req , res) => {
  const users = await User.find()
  if(!users) return res.status(204).json({"message" : "No uses found"})
  
  res.json(users)
}

// query single user
const getUser = async (req, res) => {
  if(!req?.params?.id) return res.status(400).json({"message" : "User ID required"})
  const user = await User.findOne({_id: req.params.id}).exec()
  if(!user) return res.status(204).json({"message" : `No employee matches ID ${req.body.id}`})
  res.json(user)
}

module.exports = {
  getAllUsers,
  getUser
}