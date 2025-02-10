import prisma from "../config/db.js";

// GET all categories
export const getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: { classes: true },
        });
        res.status(200).json({ message: "Success", data: categories });
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoryData = await prisma.category.findFirst({ where: { id, status: true } });

        if (!categoryData) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Success", data: categoryData });
    } catch (error) {
        res.status(500).json({ message: "Error fetching class", error: error.message });
    }
};

// POST create category
export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await prisma.category.create({ data: { name } });
        res.status(201).json({ message: "Category created", data: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

// UPDATE category
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const categoryData = await prisma.category.update({ where: { id, status: true }, data });

        res.status(200).json({ message: "Success update category", data: categoryData });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
}

// DELETE category (Soft Delete)
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const categoryData = await prisma.category.update({
            where: { id, status: true },
            data: { status: false },
        });

        res.status(200).json({ message: "Success delete category", data: categoryData });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};