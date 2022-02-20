const productDb = require("../schemas/productSchema");
const userDb = require("../schemas/userSchema");
const { nanoid } = require("nanoid");

module.exports = {
  createUser: async (req, res) => {
    const { email, passwordOne } = req.body;
    const userExists = await userDb.findOne({ email });
    if (!!userExists) {
      return res.send({ success: false, message: "email already registered" });
    }
    const user = new userDb();
    user.email = email;
    user.password = passwordOne;
    user.secret = nanoid();
    user.money = 1000;
    user.itemsBought = [];
    await user.save();
    res.send({ success: true, message: "User created successfully" });
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await userDb.findOne({ email, password });
    if (!!user) {
      res.send({ loggedIn: true, user });
    } else {
      res.send({ loggedIn: false, message: "Invalid credentials" });
    }
  },
  createProduct: async (req, res) => {
    const { title, image, price } = req.body;

    const product = new productDb();
    product.title = title;
    product.image = image;
    product.price = price;
    product.quantity = 1;
    await product.save();

    res.send({ success: true });
  },
  getAll: async (req, res) => {
    const products = await productDb.find();
    res.send({ products });
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const product = await productDb.findOne({ _id: id });
    res.send({ product });
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    await productDb.findOneAndDelete({ _id: id });

    res.send({ success: true });
  },
};
