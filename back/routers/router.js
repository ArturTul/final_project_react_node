const express = require("express");
const router = express.Router();
const middle = require("../middle/validator");

const {
  createProduct,
  getAll,
  getSingle,
  deleteProduct,
  createUser,
  loginUser,
} = require("../controllers/database");

router.post("/createUser", middle.validateRegistration, createUser);
router.post("/createProduct", middle.validateProduct, createProduct);
router.post("/loginUser", loginUser);
router.get("/all", getAll);
router.get("/single/:id", getSingle);
router.get("/delete/:id", deleteProduct);

module.exports = router;
