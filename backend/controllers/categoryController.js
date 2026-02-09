import prisma from "../utils/prisma.js";

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
