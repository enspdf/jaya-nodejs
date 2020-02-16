const { Router } = require("express");
const { login, register } = require("../controllers/userController");
const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
