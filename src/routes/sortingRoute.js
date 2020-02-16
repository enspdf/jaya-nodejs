const { Router } = require("express");
const {
  ascending,
  descending,
  mixed
} = require("../controllers/sortingController");
const verifyToken = require("../middlewares/verifyToken");
const router = Router();

router.use(verifyToken);

router.route("/asc").post(ascending);
router.route("/des").post(descending);
router.route("/mix").post(mixed);

module.exports = router;
