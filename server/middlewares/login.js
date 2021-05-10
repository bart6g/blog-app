const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        login: false,
        token: null,
        user: null,
        msg: "Not all fields have been entered",
      });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        login: false,
        token: null,
        user: null,
        msg: "No account with following emaile exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        login: false,
        token: null,
        user: null,
        msg: "Invalid email or password",
      });
    }
    const token = jwt.sign({ id: user._id }, "SECRET");
    return res.json({
      login: true,
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        blogs: user.blogs,
      },
      msg: "Successfully logged in",
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
