import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Register User
export const registerUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Cek apakah email sudah terdaftar
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user ke database
        const newUser = await prisma.user.create({
            data: { name, email, phone, password: hashedPassword },
        });

        res.status(201).json({ message: "User registered", data: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

//Login User & Generate JWT
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Cek apakah user ada di database
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Verifikasi password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

// Middleware untuk Proteksi Route
export const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};
