import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if ((!name, !email, !password)) {
      return res.status(404).json({
        message: "Some Fields Are Empty",
      });
    }

    const isUserAlreadyExists = await userModel.findOne({
      email,
    });

    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "User Already Exists",
        errors: [
          {
            message: "User Already exists",
            field: "email",
          },
        ],
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email,
      name,
      password: hashedPass,
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      config.JWT_SECRET,
    );

    return res.status(201).json({
        message:"User registered Successfully",
        user:{
            email:user.email,
            name:user.name
        },
        token:token
    })


  } catch (error) {
    console.log("error in register controller", error);
  }
};

export default {
  registerController,
};
