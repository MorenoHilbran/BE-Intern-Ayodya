import prisma from "../config/db.js";

// GET all classes
export const getAllClasses = async (req, res) => {
    try {
        const classes = await prisma.class.findMany({ where: { status: true } });
        res.status(200).json({ message: "Success", data: classes });
    } catch (error) {
        res.status(500).json({ message: "Error fetching classes", error: error.message });
    }
};

// GET class by ID
export const getClassById = async (req, res) => {
    try {
        const { id } = req.params;
        const classData = await prisma.class.findFirst({ where: { id, status: true } });

        if (!classData) {
            return res.status(404).json({ message: "Class not found" });
        }

        res.status(200).json({ message: "Success", data: classData });
    } catch (error) {
        res.status(500).json({ message: "Error fetching class", error: error.message });
    }
};

// CREATE class
export const createClass = async (req, res) => {
    try {
        const data = req.body;
        const classData = await prisma.class.create({ data });
        res.status(201).json({ message: "Class created", data: classData });
    } catch (error) {
        res.status(500).json({ message: "Error creating class", error: error.message });
    }
};

// UPDATE class
export const updateClass = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const classData = await prisma.class.update({ where: { id, status: true }, data });

        res.status(200).json({ message: "Success update class", data: classData });
    } catch (error) {
        res.status(500).json({ message: "Error updating class", error: error.message });
    }
};

// DELETE class (Soft Delete)
export const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;

        const classData = await prisma.class.update({
            where: { id, status: true },
            data: { status: false },
        });

        res.status(200).json({ message: "Success delete class", data: classData });
    } catch (error) {
        res.status(500).json({ message: "Error deleting class", error: error.message });
    }
};
