import User from "../models/User.js";
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("auth/signup");

let i = 0;
export const signup = async (req, res) => {
  console.log(i)
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: "Passwords do not match." });
  }

  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
  }

  if (errors.length > 0) {
    return res.json({
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  }

  // Look for email coincidence
  const userFound = await User.findOne({ email: email });
  if (userFound) {
    errors.push({ text: "The Email is already in use." });
    return res.json({
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  }

  // Saving a New User
  const newUser = new User({ name, email, password });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();
  res.json({
    "success_msg": "You are registered.",
    newUser
  });
};

export const renderSigninForm = (req, res) => res.render("auth/signin");

export const signin = passport.authenticate("local"
  // function(req, res){
  //   res.json({'error':"authorisation failed invalid credentials!"})
  //}
)

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    res.json({ "success_msg": "You are logged out now." });
  });
};
