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

  body("categories")
  .isArray().withMessage("Categories must be an array of string"),
  body("categories.*")
  .isString()
  .withMessage("Each category must be a string")
  .notEmpty()
  .withMessage("Category cannot be empty"),
,

  body("sizes")
    .isArray({ min: 1 })
    .withMessage("Sizes must be a non-empty array"),
    // .custom((value)=>{
    //     value.forEach((size)=>{
    //         if(!size || typeof size !== "object" || !size.size || !size.stock){
    //             throw new Error (" Each size must be an object with size and stock properties")
    //         }

    //         if(typeof size.size !== "string" || size.size.trim() === ""){
    //             throw new Error ("size must be a non-empty string")
    //         }

    //         if(typeof size.stock !== "number || size.stock < 0"){
    //             throw new Error ("Stock must be non-negative number")
    //         }
    //     })
    // }),

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

    validate
];