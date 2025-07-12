const router = require("express").Router();

// Placeholder route for social sharing
router.post("/share", (req, res) => {
  res.status(501).json({ message: "Social sharing not implemented yet" });
});

module.exports = router;
