import express from "express";
import dotenv from "dotenv";
import {PrismaClient} from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createClassValidation, updateClassValidation } from "./validation/classValidation.js";
import { createCategoryValidation, updateCategoryValidation } from "./validation/categoryValidation.js";

const prisma = new PrismaClient();
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
//ReadMany
app.get("/api/class", async (req, res) => {
    try {
        const classes = await prisma.class.findMany({
            where: {
                status: true
            },
            include: {
                category: true  
            }
            
        });

        res.status(200).json({
            message: "Success get classes data",
            datas: classes,
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching classes", error });
    }
});

//ReadbyId
app.get("/api/class/:id", async(req, res) => {
    const {id}= req.params;

    const classData = await prisma.class.findFirst({
        where:{
            id,
            status: true
        }
    });

    res.status(200).json({
        message: "Success get class data by id",
        data: classData,
    });
});

//Create
app.post("/api/class", async (req, res) => {
    const {error, value} = createClassValidation(req.body);
    if (error) {
        return res.status(422).json({ message: error.details[0].message });
    }

    try {
        const newClass = await prisma.class.create({
            data: value,
        });

        res.status(201).json({ message: "Kelas berhasil ditambahkan!", data: newClass });
    } catch (error) {
        console.error("Error adding class:", error);
        res.status(500).json({ message: "Gagal menambahkan kelas.", error });
    }
});

//Update
app.patch("/api/class/:id", async (req, res) => {
    const { id } = req.params;
    const {error, value} = updateClassValidation(req.body);
   

    if (error){
        return res.status(422).json({ message: error.details[0].message });
    }
    try {
        const updatedClass = await prisma.class.update({
            where: { id },
            data: value,
        });

        res.status(200).json({ message: "Kelas berhasil diperbarui!", data: updatedClass });
    } catch (error) {
        console.error("Error updating class:", error);
        res.status(500).json({ message: "Gagal memperbarui kelas.", error });
    }
});


//Delete
app.delete("/api/class/:id", async(req, res) => {
    const { id } = req.params;
    const classData = await prisma.class.update({
        where: {
            id,
            status: true
        },
        data: {
            status: false
        }
        
    });
     
    res.status(200).json({
        message: "Success delete class data",
        data: classData,
    });
});



//ReadManyCategory
app.get("/api/category", async(req, res) => {
    const categories = await prisma.category.findMany({
        where:{
            status: true
        }
    });
     
    res.status(200).json({
        message: "Success get categories data",
        datas: categories,
    });
});

//CreateCategory
app.post("/api/category", async(req, res) => {
    const { error, value } = createCategoryValidation(req.body);

    try {
        if (error) {
            return res.status(422).json({ message: error.details[0].message });
        }
        const categoryData = await prisma.category.create({
            data: value,
        });
        res.status(201).json({ message: "Success create category data", data: categoryData });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: "Gagal membuat kategori.", error });
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

//ReadbyIdCategory
app.get("/api/category/:id", async(req, res) => {
    const {id}= req.params;

    const categoryData = await prisma.category.findFirst({
        where:{
            id,
            status: true
        }
    });

    res.status(200).json({
        message: "Success get category data by id",
        data: categoryData,
    });
})

//UpdateCategory
app.patch("/api/category/:id", async(req, res) => {
    const {id}= req.params;
    const {error, value}=updateCategoryValidation(req.body);

    try {
        if (error) {
            return res.status(422).json({ message: error.details[0].message });
        }
        const categoryData = await prisma.category.create({
            where: id,
            data: value,
        });
        res.status(201).json({ message: "Success create category data", data: categoryData });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: "Gagal membuat kategori.", error });
    }
   
});

//Delete
app.delete("/api/category/:id", async(req, res) => {
    const { id } = req.params;
    const categoryData = await prisma.category.update({
        where: {
            id,
            status: true
        },
        data: {
            status: false
        }
        
    });
     
    res.status(200).json({
        message: "Success delete category data",
        data: categoryData,
    });
});

//REGISTER
app.post("/api/user/register", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Validasi input
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Cek apakah email atau phone sudah digunakan
        const existingUser = await prisma.user.findFirst({
            where: { OR: [{ email }, { phone }] },
        });

        if (existingUser) {
            return res.status(400).json({ message: "Email or Phone already exists" });
        }
        //hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat user baru
        const userData = await prisma.user.create({
            data: { name, email, phone, password: hashedPassword },
        });

        res.status(201).json({ message: "User created successfully", data: userData });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//Login
app.post("/api/user/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validasi input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Cari user berdasarkan email
        const user = await prisma.user.findUnique({ where: { email } });

        // Cek apakah user ada
        if (!user) {
            return res.status(404).json({ message: "Pengguna Tidak Ditemukan" });
        }

        // Cek apakah password benar (sementara tanpa hashing)
        const isPasswordValid = await bcrypt.compare (password, user.password);

        if (!isPasswordValid){
            return res.status(401).json({ message: "Invalid password" });
        }


        // Buat JWT Token
        const token = jwt.sign({ id: user.id, email: user.email }, "SECRET_KEY", { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
})

//GET ALL USERS
app.get("/api/user", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({ message: "Success get users data", datas: users });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//GET USER BY ID
app.get("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await prisma.user.findUnique({ where: { id } });

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Success get user data", data: userData });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//UPDATE USER
app.patch("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        // Cek apakah user ada
        const existingUser = await prisma.user.findUnique({ where: { id } });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update data
        const updatedUser = await prisma.user.update({ where: { id }, data });

        res.status(200).json({ message: "Success update user data", data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//DELETE USER
app.delete("/api/user/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Cek apakah user ada
        const existingUser = await prisma.user.findUnique({ where: { id } });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        await prisma.user.delete({ where: { id } });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//Crea
