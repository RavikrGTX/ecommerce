import prisma from "../utils/prisma.js";

/**
 * GET /api/products
 * Optional filter: ?category=electronics
 */
export const getAllProducts = async (req, res, next) => {
  try {
    const { category } = req.query;

    const products = await prisma.product.findMany({
      where: category
        ? {
            category: {
              name: category,
            },
          }
        : {},
      include: {
        category: true,
      },
    });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/products/:id
 */
export const getProductById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/products
 * (Admin later — for now open)
 */
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, stock, image, categoryId } = req.body;

    if (!name || price === undefined || stock === undefined || !categoryId) {
      return res.status(400).json({
        success: false,
        message: "name, price, stock and categoryId are required",
      });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        image,
        categoryId,
      },
    });

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
