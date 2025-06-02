# Project Setup

This guide will help you set up and run the project locally.

## Prerequisites

Before installing, make sure you have the following installed:

- **Yarn** – [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- **Docker** – [Install Docker](https://docs.docker.com/get-docker/) (optional, for running services via Docker)

## Launch Instructions

Follow these steps to launch the application:

1. **Navigate to the backend directory:**
   ```bash
   cd ./apps/backend
2. **Start Docker containers:**
   docker-compose up -d
3. **Install project dependencies from the root directory:**
   yarn
4. **Start the NestJS backend server:**
   yarn run backend:dev
5. **Start the React frontend application:**
   yarn run frontend:dev
6. **Access the applications:**
   Backend: http://localhost:3000
   Frontend: http://localhost:5173