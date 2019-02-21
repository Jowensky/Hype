const router = require("express").Router();
const Clothes = require("../../controllers");

// Matches with "/api/books"
router.route("/")
  .get(Clothes.findAll)
  .post(offWhiteComment.create)
  .post(Clothes.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Clothes.findById)
  .put(Clothes.update)
  .delete(Clothes.remove)
  .delete(offWhiteComment.remove);

module.exports = router;