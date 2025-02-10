import express from "express";
import { getAllCategories, createCategory, getCategoryById, deleteCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getAllCategories);
router.post("/", createCategory);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategory);
router.patch("/:id", updateCategory);

export default router;
