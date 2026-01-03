# Node.js Advanced Starter Template

> [!TIP]
> ### 🚀 Unlock the Full Power of the Node.js Enterprise Platform
> This repository is the **Launchpad Edition**—a powerful architectural foundation. For the **Complete Enterprise Edition** including Multi-tenancy, CI/CD, Advanced Security, and more, visit the [Official Platform Page](https://aymenkani.github.io/nodejs-enterprise-platform/).

---

# Introduction and Project Overview

Welcome to the Node.js Advanced Starter Template documentation! This template is designed to provide a robust, scalable, and feature-rich foundation for building modern Node.js API applications.

## 🌟 Go Pro: Node.js Enterprise Template

While this starter template provides a world-class architecture, the **Node.js Enterprise Template** is the complete production-ready engine used by top-tier startups and enterprises.

| Feature | Launchpad (Free) | Advanced Edition (Node.js Multimodal RAG Starter) |
| :--- | :---: | :---: |
| **Layered Architecture** | ✅ | ✅ |
| **Prisma & Postgres** | ✅ | ✅ |
| **Standard RAG Pipeline** | ✅ | ✅ |
| **Multimodal RAG (Image Analysis)** | ❌ | ✅ |
| **Smart Content Deduplication** | ❌ | ✅ |
| **Self-Healing Architecture** | ❌ | ✅ |
| **Dual Login (Google OAuth + Email)** | ❌ | ✅ |
| **Token Blacklisting & Secure Logouts**| ❌ | ✅ |
| **Smart Storage (Signed URLs)** | ❌ | ✅ |
| **Real-time Offline Queued Notifications**| ❌ | ✅ |
| **Admin Controls (Ban/Delete/Broadcast)**| ❌ | ✅ |

[**Get the Full Version Now →**](https://aymenkani.github.io/nodejs-enterprise-platform/)

---

## What is this Template For?

This template is ideal for developers and teams looking to kickstart new API projects with a solid architectural base. It abstracts away much of the initial setup and configuration, allowing you to focus on developing your core business logic. Whether you're building a microservice, a backend for a web application, or a standalone API, this template provides the necessary infrastructure to get started quickly and efficiently.

## Key Features

*   **Authentication & Authorization:** Secure your API with JSON Web Tokens (JWT) and integrate with third-party providers like Google OAuth2.0. Includes robust password reset functionality.
*   **Database Management:** Seamless integration with Prisma ORM, supporting PostgreSQL and MySQL databases. Features include schema definition, migrations, and seeding.
*   **Background Job Processing:** Efficiently handle long-running tasks and asynchronous operations using BullMQ, a powerful Redis-backed queueing system.
*   **API Documentation:** Automatically generate and serve interactive API documentation using OpenAPI (Swagger UI), making your API easy to understand and consume.
*   **Input Validation:** Ensure data integrity and improve API reliability with schema-based validation using Zod.
*   **Error Handling:** Centralized and consistent error handling with custom `ApiError` classes and global middleware.
*   **Structured Logging:** Implement effective monitoring and debugging with structured logging using Pino.
*   **Configuration Management:** Flexible environment variable management for different deployment environments.
*   **Development & Production Ready:** Includes Docker support for containerization, making local development consistent and deployment straightforward.
*   **Containerization Strategy:** Implemented a Multi-Stage Dockerfile (`Dev` -> `Builder` -> `Runner`) to create lean, secure, and efficient production images while maintaining a feature-rich development environment.
*   **Code Quality & Maintainability:** Enforced code style with ESLint and Prettier, along with pre-commit hooks using Husky.
*   **AI-Powered RAG Pipeline:** Integrated Retrieval-Augmented Generation (RAG) system using Google Gemini. Features asynchronous document ingestion, Visual RAG (extracting intelligence from images), semantic search with `pgvector`, and streaming AI responses.
*   **Testing:** Comprehensive testing setup with Jest for unit and integration tests, including database testing strategies.
*   **CI/CD:** Pre-configured GitHub Actions workflows for continuous integration (linting, testing, building) and continuous deployment.

## 🚀 Why Upgrade to the Advanced Version?

The **Node.js Multimodal RAG Starter** is not just a boilerplate; it's a production-ready engine designed to handle the complexities of modern AI applications.

### 1. 🧠 Multimodal RAG Pipeline (The Killer Feature)
- **Multimodal Capabilities:** Beyond text—ingest and analyze images. Automatically generates descriptions and stores them for semantic search.
- **Smart Deduplication:** Content-hash comparison prevents duplicate uploads, saving you money on storage and Vector DB tokens.
- **Self-Healing Architecture:** Background jobs monitor ingestion. Failed or hanging processes are automatically cleaned up, keeping your data "pristine."
- **Total AI Experience:** ChatGPT-like interface with a first-class citation system providing secure links to source files.

### 2. 🛡️ Fortress Authentication & Security
- **Dual Login Sync:** Seamlessly supports both Google OAuth and standard Email/Password authentication.
- **Advanced Session management:** Refresh Token rotation with persistent blacklisting for absolute logout security.
- **Secure Email Flows:** Hashed-token validation for Email Verification and Password Resets.
- **Granular RBAC:** Deeply integrated Role-Based Access Control (Admin vs. User) with ready-to-use middleware.

### 3. ☁️ Smart Storage (Cloudflare R2 Integration)
- **Privacy First:** Native support for "Public" vs "Private" file visibility.
- **Secure Delivery:** Generates Temporary Signed URLs (1-hour expiry) for source citations, keeping your main bucket completely locked down.

### 4. ⚡ Real-Time Notification System (Socket.IO)
- **Hybrid Delivery:** Blazing fast real-time updates for active users.
- **Offline Queuing:** Missed a notification? It's saved to Postgres and automatically delivered the moment the user reconnects.
- **State Management:** Built-in "Read/Unread" tracking to prevent user spam.

### 5. ⚙️ Admin & User Management
- **Command Center:** Admin routes to ban/delete users, update details, and broadcast system-wide notifications instantly.
- **User Dashboard:** Complete CRUD for users to manage their profiles, emails, and own files.

### 6. 🏗️ Professional Infrastructure
- **Background Heavy Lifting:** Heavy RAG tasks are offloaded to dedicated worker threads via BullMQ.
- **Production-Ready Schema:** Fully modeled Prisma architecture for Users, Vectors, Files, Notifications, and Jobs.
- **Docker-First:** Optimized multi-stage Docker builds ready for instant deployment to Railway or Render.

---

## AI & RAG Intelligence (Launchpad Edition)

## Comprehensive Documentation

This project includes a full documentation website built with **MkDocs** and the Material theme, located in the `documentation/` directory. This website contains detailed explanations of every part of the template, from setup to deployment, and includes a powerful search feature to help you find information quickly.

### How to Run the Documentation Website

To view the documentation locally, follow these steps:

1.  **Navigate to the docs directory:**
    ```bash
    cd mk-docs-website/docs-website
    ```

2.  **Install dependencies:**
    You'll need Python and pip installed. Install the required packages using the `requirements.txt` file.
    ```bash
    pip install -r ../requirements.txt
    ```

3.  **Start the MkDocs server:**
    This command will start a local server, and you can view the documentation in your browser.
    ```bash
    mkdocs serve
    ```

4.  **Open in your browser:**
    By default, the site will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Core Technologies Stack

*   **Runtime:** Node.js
*   **Web Framework:** Express.js
*   **Language:** TypeScript
*   **ORM:** Prisma
*   **Authentication:** Passport.js (JWT, Google OAuth2.0)
*   **Job Queue:** BullMQ (with Redis)
*   **API Documentation:** OpenAPI (Swagger UI)
*   **Validation:** Zod
*   **Logging:** Pino
*   **AI SDK:** Vercel AI SDK
*   **LLM:** Google Gemini (Pro, Flash, Vision)
*   **Vector Database:** PostgreSQL with `pgvector`
*   **Storage:** Cloudflare R2 (S3 Compatible)
*   **Containerization:** Docker
*   **Testing:** Jest
*   **Code Quality:** ESLint, Prettier, Husky
*   **CI/CD:** GitHub Actions

## Target Audience

This template is designed for:

*   **Backend Developers:** Who want a modern, opinionated Node.js API boilerplate.
*   **Full-stack Developers:** Looking for a robust backend foundation to pair with their frontend applications.
*   **Teams:** Aiming for consistency and best practices across their Node.js projects.

By leveraging this template, you can significantly reduce setup time and focus on delivering value faster, with confidence in the underlying architecture.

## Deploying to Render

This template includes a `render.yaml` file to easily deploy the application to [Render](https://render.com/) using Blueprints.

### Free Tier Limitations

When using Render's free tier, please be aware of the following limitations:

*   **Redis Data Loss:** The `redis` service on the free plan is ephemeral. If your instance restarts for any reason, all data stored in Redis (such as session information and cached data) will be permanently lost. This is acceptable for testing and development, but it is highly recommended to upgrade to a paid plan for production environments to ensure data persistence.

*   **PostgreSQL Database:** The free PostgreSQL database is subject to limitations, including expiration after 90 days of inactivity or limited usage quotas. For production applications requiring long-term data storage, consider upgrading to a paid database plan.

*   **`repo` Field in `render.yaml`:** The `repo` field in the `render.yaml` file is typically not required if you create the Blueprint directly from the Render dashboard while connected to your GitHub account. Render automatically associates the repository. Removing this line can make the configuration more generic and portable for your customers.
