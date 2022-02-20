const emailValidator = require("email-validator");

module.exports = {
  validateRegistration: (req, res, next) => {
    const { email, passwordOne, passwordTwo } = req.body;

    const validEmail = emailValidator.validate(email);

    if (!validEmail) {
      return res.send({ error: true, message: "Email is not valid" });
    }
    if (passwordOne !== passwordTwo) {
      return res.send({ error: true, message: "Passwords do not match" });
    }
    next();
  },
  validateProduct: (req, res, next) => {
    const { title, price, image } = req.body;

    if (title.length < 10 || title.length > 50)
      return res.send({
        success: false,
        message: "Title too long or too short",
      });
    if (price <= 0 && typeof price !== Number)
      return res.send({ success: false, message: "Incorrect price" });
    if (!image.includes("http"))
      return res.send({ success: false, message: "Incorrect image format" });

    next();
  },
};
