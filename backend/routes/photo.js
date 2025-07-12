
const router = require("express").Router();
const { upload } = require("../config/cloudinary");
const Photo = require("../models/photoModel");
const jwt = require("jsonwebtoken");

// Middleware to protect routes
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json("Access Denied: No Token Provided");

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json("Invalid Token");
    req.user = user;
    next();
  });
};

// Upload a photo
router.post("/upload", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, caption } = req.body;

    const newPhoto = new Photo({
      title,
      caption,
      imageUrl: req.file.path,
      publicId: req.file.filename,
      user: req.user.id,
    });

    const saved = await newPhoto.save();
    res.status(501).json(saved);
  } catch (err) {
    res.status(500).json(err.message || "Upload failed");
  }
});

module.exports = router;
