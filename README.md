# 🎬 MERN Movie App - Role-Based Access Control

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) ![Frontend: React](https://img.shields.io/badge/Frontend-React-61DAFB.svg) ![Backend: Node](https://img.shields.io/badge/Backend-Node-3C873A.svg) ![Database: MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248.svg) ![UI: MUI](https://img.shields.io/badge/UI-Material--UI-007FFF.svg)

A **production-ready MERN stack movie application** with **JWT authentication**, **role-based access control**, **responsive UI**, and **full CRUD operations**. Built to meet enterprise-level requirements with scalability and performance in mind.

## Live Demo

| Component | URL |
|-----------|-----|
| **Frontend** | [https://movie-app-neon-pi.vercel.app](https://movie-app-neon-pi.vercel.app) |
| **Backend API** | [https://movie-app-z6h2.onrender.com/health](https://movie-app-z6h2.onrender.com/health) |
| **Database** | MongoDB Atlas Cluster |

## Features

### ✅ **User Features**
- 🎥 **Home Page**: Browse 60+ IMDb Top movies with pagination
- 🔍 **Search**: Real-time search by title/description
- 📱 **Responsive**: Mobile-first design with Material-UI
- 🔐 **JWT Authentication**: Secure login with token persistence (Redux Persist)

### ✅ **Admin Features** (Role: `admin`)
- ➕ **Add Movies**: Complete movie form with Formik + Yup validation
- ✏️ **Edit Movies**: Update any movie details
- 🗑️ **Delete Movies**: Remove movies permanently
- 🔒 **Protected Routes**: Admin-only access control

### ✅ **Technical Features**
- **Frontend**: React 18 + Redux Toolkit + React Query + Material-UI v5
- **Backend**: Node.js + Express + MongoDB + JWT + Zod validation
- **Performance**: Optimized queries, pagination, text indexes
- **State**: Redux persist (auth survives refresh)
- **Forms**: Formik + Yup validation
- **Deployment**: Vercel (FE) + Render

## **Setup**
- **IMPORTANT** Setup up you .env file according to .env.example
- **Frontend**
    ```bash
    cd client
    npm i
    npm run dev
    ```
- **backend**
    ```bash
    cd server
    npm i
    npm run seed:migrate
    npm run dev
    ```
## 📡 API Documentation

| Method | Endpoint | Description | Auth | Role |
|--------|----------|-------------|------|------|
| `GET` | `/api/health` | Health check | No | - |
| `POST` | `/api/auth/login` | User login | No | - |
| `POST` | `/api/auth/register` | Register user | No | - |
| `GET` | `/api/movies` | Get movies (paginated) | No | User |
| `GET` | `/api/movies/search?q=term` | Search movies | No | User |
| `POST` | `/api/movies` | Create movie | Yes | Admin |
| `PUT` | `/api/movies/:id` | Update movie | Yes | Admin |
| `DELETE` | `/api/movies/:id` | Delete movie | Yes | Admin |

## Author
#### **Athul** - Full Stack Developer [LinkedIn](https://www.linkedin.com/in/athul-krishna-m-m-7b4364262) | [GitHub](https://github.com/AK-cyber-star)
---
