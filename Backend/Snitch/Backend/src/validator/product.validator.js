import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

export const productValidationRoules = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 6 and 100 characters"),

  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Description must be between 10 and 1000 characters"),

  body("price.amount")
    .notEmpty()
    .withMessage("Price amount is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  body("price.currency")
    .notEmpty()
    .withMessage("Currency is required")
    .isIn(["USD", "EUR", "CAD", "INR"])
    .withMessage("Currency must be USD, EUR, CAD or INR"),

  body("categories").notEmpty().withMessage("category is Required"),

  body("sizes")
    .isArray({ min: 1 })
    .withMessage("Sizes must be a non-empty array"),

  body("sizes.*.size")
    .notEmpty()
    .withMessage("Size is required")
    .isIn(["XS", "M", "L", "XL", "XXL"])
    .withMessage("Invalid size. Allowed: XS, M, L, XL, XXL"),

  body("sizes.*.stock")
    .notEmpty()
    .withMessage("Stock is required")
    .isInt({ min: 0 })
    .withMessage("Stock must be a number greater than or equal to 0"),
];