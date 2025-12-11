require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./model/userModel");
const { verifyToken } = require("./middleware/auth");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings",verifyToken, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.json({ success: false, message: "Email already registered!" });
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = new UserModel({
    username,
    email,
    password: hashedPassword
  });
  await newUser.save();
  res.json({ success: true, message: "Signup successful!" });
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.json({ success: false, message: "Wrong password" });
  }
  const token = jwt.sign(
    { id: user._id, username: user.username },
    "secret123",
    { expiresIn: "3d" }
  );
  res.json({ success: true, token });
});



app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});