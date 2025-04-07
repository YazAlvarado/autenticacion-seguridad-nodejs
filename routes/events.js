const express = require("express");
const { verifyToken, authorizeRoles } = require("../middlewares/auth");
const Event = require("../models/Event");

const router = express.Router();
router.post(
  "/",
  verifyToken,
  authorizeRoles("organizador", "admin"),
  async (req, res) => {
    try {
      const event = new Event({ ...req.body, createdBy: req.user.id });
      await event.save();
      res.json(event);
    } catch (err) {
      res.status(500).json({ msg: "Error al crear evento" });
    }
  }
);
router.get("/", verifyToken, async (req, res) => {
  const events = await Event.find().populate("createdBy", "name email");
  res.json(events);
});
module.exports = router;
