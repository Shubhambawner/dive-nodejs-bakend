import { Router } from "express";
import {
  renderSignUpForm,
  signup,
  renderSigninForm,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes
router.get("/auth/signup", renderSignUpForm);

router.post("/auth/signup", signup);

router.get("/auth/signin", renderSigninForm);

router.post("/auth/signin", signin, function(req,res){
  res.json({user:req.user})
});

router.get("/auth/logout", logout);

export default router;
