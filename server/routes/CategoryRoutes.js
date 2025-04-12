import { Router } from "express";
import { createCategory, getAllCategories, updateCategory } from "../controllers/CategoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.config.js"

const router = Router();

router.post("/", upload.single("image"), authMiddleware, createCategory);
router.get("/", authMiddleware, getAllCategories);
router.put("/:id", upload.single("image"), authMiddleware, updateCategory);

export default router;