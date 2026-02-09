
import prisma from "../utils/prisma.js";

/**
 * GET /api/cart
 * Get logged-in user's cart
 */
export const getMyCart = async (req, res, next) => {
  try {
    const userId = req.user.userId;

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: { product: true },
        },
      },
    });

    res.status(200).json({
      success: true,
      data: cart || { items: [] },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/cart
 * Add product to cart
 */
export const addToCart = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        success: false,
        message: "productId and quantity are required",
      });
    }

    // 1️⃣ Find or create cart
    let cart = await prisma.cart.findUnique({ where: { userId } });

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId },
      });
    }

    // 2️⃣ Check if product already in cart
    const existingItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    if (existingItem) {
      // Increase quantity
      await prisma.cartItem.update({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId,
          },
        },
        data: {
          quantity: existingItem.quantity + quantity,
        },
      });
    } else {
      // Add new item
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Item added to cart",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/cart
 * Update quantity
 */
export const updateCartItem = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({
        success: false,
        message: "productId and quantity are required",
      });
    }

    const cart = await prisma.cart.findUnique({ where: { userId } });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    if (quantity <= 0) {
      await prisma.cartItem.delete({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId,
          },
        },
      });
    } else {
      await prisma.cartItem.update({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId,
          },
        },
        data: { quantity },
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart updated",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/cart/:productId
 * Remove product from cart
 */
export const removeCartItem = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const productId = parseInt(req.params.productId);

    const cart = await prisma.cart.findUnique({ where: { userId } });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    await prisma.cartItem.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
    });
  } catch (error) {
    next(error);
  }
};
