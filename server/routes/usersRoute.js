
const express = require("express"); 
const userController = require("../controllers/user.controller");
const userRouter = express.Router(); 

userRouter.get("/", userController.getAllUsers)
userRouter.get("/:uid", userController.getSingleUser)
userRouter.post("/", userController.createUser)
userRouter.patch("/:uid", userController.updateUser)
userRouter.delete("/:uid", userController.deleteUser)
module.exports = userRouter; 
