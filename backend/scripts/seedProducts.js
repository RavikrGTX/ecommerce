
import prisma from "../utils/prisma.js";

const products = [
  {
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },
  {
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon",
    category: "jewelery",
    image:
      "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  },
  {
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image:
      "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
  },
  {
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring",
    category: "jewelery",
    image:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  },
  {
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: "jewelery",
    image:
      "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  },
  {
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers",
    category: "electronics",
    image:
      "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load",
    category: "electronics",
    image:
      "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
  },
  {
    title: "Silicon Power 256GB SSD",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds",
    category: "electronics",
    image:
      "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
  },
  {
    title: "WD 4TB Gaming Drive Works with Playstation 4",
    price: 114,
    description:
      "Expand your PS4 gaming experience",
    category: "electronics",
    image:
      "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
  },
  {
    title: "Acer SB220Q 21.5 inches Full HD Monitor",
    price: 599,
    description:
      "21.5 inches Full HD IPS display",
    category: "electronics",
    image:
      "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
  },
  {
    title: "Samsung 49-Inch Curved Gaming Monitor",
    price: 999.99,
    description:
      "49 inch super ultrawide curved gaming monitor",
    category: "electronics",
    image:
      "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  },
  {
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
    price: 56.99,
    description:
      "Detachable liner fabric, warm fleece",
    category: "women's clothing",
    image:
      "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  },
  {
    title: "Lock and Love Women's Faux Leather Jacket",
    price: 29.95,
    description:
      "Faux leather material for style and comfort",
    category: "women's clothing",
    image:
      "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
  },
  {
    title: "Rain Jacket Women Windbreaker",
    price: 39.99,
    description:
      "Lightweight perfect for trip or casual wear",
    category: "women's clothing",
    image:
      "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
  },
  {
    title: "MBJ Women's Solid Short Sleeve Boat Neck",
    price: 9.85,
    description:
      "Lightweight fabric with great stretch",
    category: "women's clothing",
    image:
      "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
  },
  {
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "Highly breathable with moisture wicking fabric",
    category: "women's clothing",
    image:
      "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
  },
  {
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "Casual short sleeve letter print fashion tee",
    category: "women's clothing",
    image:
      "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
  },
];

async function seed() {
  console.log("🌱 Seeding products and categories...");

  for (const p of products) {
    const category = await prisma.category.upsert({
      where: { name: p.category },
      update: {},
      create: { name: p.category },
    });

    await prisma.product.create({
      data: {
        name: p.title,
        description: p.description,
        price: p.price,
        stock: Math.floor(Math.random() * 50) + 1,
        image: p.image,
        categoryId: category.id,
      },
    });
  }

  console.log("✅ Seeding completed successfully");
}

seed()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
