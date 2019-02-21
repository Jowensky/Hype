const router = require("express").Router();
const clothesRoutes = require("./clothes");

// Book routes
router.use("/clothes", clothesRoutes);

module.exports = router;
