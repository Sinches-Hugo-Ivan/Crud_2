const { body, check } = require("express-validator");

module.exports = [
  body("title").notEmpty().withMessage("Campo obligatorio"),
  body("rating")
    .notEmpty()
    .withMessage("Campo obligatorio"),
  body("awards")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isInt()
    .withMessage("Ingrese solo numeros"),
  body("release_date").notEmpty().withMessage("Campo obligatorio"),
  body("length")
    .notEmpty()
    .withMessage("campo obligatorio")
    .isInt()
    .withMessage("Solo numeros")
];
