const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password, passwordRepeat } = req.body;

    if (!name || !email || !password || !passwordRepeat) {
      console.log("9");
      return res.status(200).json({
        user: null,
        msg: "Not all fields have been entered",
        success: false,
      });
    }
    if (password.length < 5) {
      console.log("15");
      return res.status(200).json({
        user: null,
        msg: "The password needs to be at least 5 characters long.",
      });
    }
    if (password !== passwordRepeat) {
      console.log("22");

      return res.status(200).json({
        user: null,
        msg: "Enter the same password twice for verification.",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      console.log("32");
      return res.status(200).json({
        user: null,
        msg: "An account with this email already exists",
        success: false,
      });
    } else {
      //create new user with is_active=false

      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);
        return res.status(200).json({
          user: savedUser,
          msg: "Registered successfully",
          success: true,
        });
      } catch (err) {
        return res
          .status(200)
          .json({ user: null, msg: err.message, success: false });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
};
