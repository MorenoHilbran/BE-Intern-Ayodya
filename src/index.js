import express from "express";
import dotenv from "dotenv";
import {PrismaClient} from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
//ReadMany
app.get("/api/class", async(req, res) => {
    const classes = await prisma.class.findMany({
        where:{
            status: true
        }
    });
     
    res.status(200).json({
        message: "Success get classes data",
        datas: classes,
    });
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
app.post("/api/class", async(req, res) => {
    const data= req.body;
    const classData = await prisma.class.create({
        data,
    });
     
    res.status(200).json({
        message: "Success create class data",
        data: classData,
    });
});

//Update
app.patch("/api/class/:id", async(req, res) => {
    const {id}= req.params;
    const data=req.body;
    const classData = await prisma.class.update({
        where: {
            id,
            status: true
        },
        data,
    });
     
    res.status(200).json({
        message: "Success update class data",
        data: classData,
    });
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



//ReadMany
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

//Create
app.post("/api/category", async(req, res) => {
    const data= req.body;
    const categoryData = await prisma.category.create({
        data,
    });
     
    res.status(200).json({
        message: "Success create category data",
        data: categoryData,
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

//ReadbyId
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

//Update
app.patch("/api/category/:id", async(req, res) => {
    const {id}= req.params;
    const data=req.body;
    const categoryData = await prisma.category.update({
        where: {
            id,
            status: true
        },
        data,
    });
     
    res.status(200).json({
        message: "Success update category data",
        data: categoryData,
    });
});

//Delete
