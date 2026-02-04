# E-Commerce Base Project (Prisma 7 Updated)

This project provides a foundational e-commerce application built with a modern, full-stack JavaScript/TypeScript ecosystem. It follows industry best practices and is updated to comply with **Prisma 7** configuration requirements.

## 🚀 Tech Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js (React) | Server-side rendering and routing for the user interface. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid and responsive design. |
| **Backend** | Express.js (Node.js) | Simple, fast, and unopinionated web framework for the API server. |
| **ORM** | Prisma 7 | Next-generation ORM with modern configuration for type-safe database access. |
| **Database** | PostgreSQL | Robust, open-source relational database. |
| **Package Manager** | npm | Used for managing project dependencies. |

## 📦 Project Structure

The project is divided into two main directories:

- `backend/`: Contains the Express.js API server, structured for scalability.
- `frontend/`: Contains the Next.js application, using a component-based approach.

### Backend Structure (`backend/`)

| Directory/File | Description | Best Practice |
| :--- | :--- | :--- |
| `controllers/` | Contains the business logic for handling requests. | **Separation of Concerns:** Keeps route files clean and focused on routing. |
| `routes/` | Defines the API endpoints and maps them to controllers. | **Clean Routing:** Clear definition of API surface. |
| `middleware/` | Houses functions that run before or after route handlers. | **Reusability:** Centralizes cross-cutting concerns. |
| `utils/prisma.js` | Centralized Prisma Client initialization. | **Singleton Pattern:** Prevents multiple database connections. |
| `schema.prisma` | Database schema definition (clean of connection URLs). | **Prisma 7 Standards.** |
| `prisma.config.ts` | Modern configuration file for Prisma 7. | **Secure Config Management.** |

## 🛠️ Local Setup Guide

Follow these steps to get the project running on your local machine.

### Prerequisites

1.  **Node.js & npm:** Ensure you have Node.js (version 18+) and npm installed.
2.  **PostgreSQL:** You need a running PostgreSQL instance.
3.  **VS Code:** (Recommended) For a great development experience.

### Step 1: Database Setup (Backend)

1.  **Create a `.env` file** in the `backend/` directory and add your PostgreSQL connection string.

    ```
    # backend/.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"
    PORT=5000
    ```

2.  **Install dependencies and generate Prisma client:**

    ```bash
    cd backend
    npm install
    npx prisma generate
    ```

3.  **Run migrations to create tables:**

    ```bash
    npx prisma migrate dev --name initial_setup
    ```

### Step 2: Run the Backend API

Start the Express server:

```bash
npm run dev
# The API will be running at http://localhost:5000
```

### Step 3: Run the Frontend Application

1.  **Install dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

2.  **Run the Next.js development server:**

    ```bash
    npm run dev
    # The frontend will be running at http://localhost:3000
    ```

## 🔧 Prisma 7 Configuration Details

In compliance with Prisma 7+, the database connection is no longer hardcoded or directly referenced via `url` in `schema.prisma`. Instead:

1.  **`schema.prisma`**: Only defines the `provider`.
2.  **`prisma.config.ts`**: Handles the connection URL for CLI tools like `migrate`.
3.  **`utils/prisma.js`**: Programmatically passes the `DATABASE_URL` to the `PrismaClient` constructor for runtime use.

## ✨ Best Practices Implemented

- **Controller-Service Pattern**: Business logic is separated from routing.
- **Centralized Error Handling**: Global middleware for consistent error responses.
- **Prisma Singleton**: Using `utils/prisma.js` to manage the database connection efficiently.
- **Component-Based Frontend**: Reusable UI components for a clean Next.js structure.

## ⏭️ Scaling and Feature Implementation Guide

### Adding User Authentication (Example)

1.  **Controller**: Create `authController.js` to handle registration and login logic.
2.  **Routes**: Add `/api/auth/register` and `/api/auth/login` in `routes/auth.js`.
3.  **Security**: Use `bcrypt` for password hashing and `jsonwebtoken` (JWT) for session management.
4.  **Middleware**: Create `authMiddleware.js` to protect routes by verifying the JWT before allowing access to the controller.

**Example Protected Route:**
```javascript
const { protect } = require('../middleware/authMiddleware');
const { createProduct } = require('../controllers/productController');

// router.post('/', protect, createProduct);
```
