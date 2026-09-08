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

export const registerValidationRules = [
  body("email")
    .notEmpty()
    .withMessage("Email Is required")
    .isEmail()
    .withMessage("Invalid Email Format"),
  body("name")
    .isString()
    .withMessage("Name Must be String")
    .notEmpty()
    .withMessage("name Is required")
    .isLength({ min: 6 })
    .withMessage("Name Must Be Atleast 6 char long"),
  body("password")
    .notEmpty()
    .withMessage("password Is required")
    .isLength({ min: 6 })
    .withMessage("password must be 6 char long"),
  // body('role')
  // .notEmpty().withMessage("Role Is required"),
  validate,
];

export const loginValidationRules = [
  body("email")
    .notEmpty()
    .withMessage("Email Is required")
    .isEmail()
    .withMessage("Invalid Email Format"),
//   body("name")
//     .isString()
//     .withMessage("Name Must be String")
//     .notEmpty()
//     .withMessage("name Is required")
//     .isLength({ min: 6 })
//     .withMessage("Name Must Be Atleast 6 char long"),
  body("password")
    .notEmpty()
    .withMessage("password Is required")
    .isLength({ min: 6 })
    .withMessage("password must be 6 char long"),
  // body('role')
  // .notEmpty().withMessage("Role Is required"),
  validate,
];