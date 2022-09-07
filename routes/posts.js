const verifyToken = require("./verifyToken");

const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verifyToken, function (req, res) {
  res.json({
    posts: {
      title: "first post",
      description: "random data you shouldn't access",
    },
    user: req.user._id,
  });
});

module.exports = router;
