const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Ruta de autenticación");
});
router.post("/login", (req, res) => {
  res.send("Login realizado");
});
router.post("/register", (req, res) => {
  res.send("Usuario registrado");
});
module.exports = router;
