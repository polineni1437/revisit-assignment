import { Router } from "express";
import { Login, Register } from "../controllers/UserController.js";

const router = Router();

router.post("/signup", Register);
router.post("/login", Login);

export default router;