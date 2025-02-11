import express from "express";
import { getUsers, getUserById, registerUser, loginUser, updateUser, deleteUser, authenticateUser } from "../controllers/userController.js";

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Routes (hanya bisa diakses jika login)
router.get("/", authenticateUser, getUsers);
router.get("/:id", authenticateUser, getUserById);
router.patch("/:id", authenticateUser, updateUser);
router.delete("/:id", authenticateUser, deleteUser);

export default router;
