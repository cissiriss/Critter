Critter

This project is a fullstack application, comprising a backend and a frontend, that can be run either locally or via Docker. Below, you'll find detailed instructions for setting up and running the project in both environments.

Project Structure

project/  
├── backend/ # Backend application (API)  
├── frontend/ # Frontend application (React)  
└── docker-compose.yml

Make sure you have the following installed:

    Node.js
    npm or yarn
    Docker and Docker Compose

Environment Setup
Local Setup

    Navigate to the backend/ directory and install dependencies:

cd backend  
npm install

Set up a .env file in the backend/ directory with the variables as seen in the compose.yml and also the PGURI_LOCAL and the PGURI_DOCKER if you wish to start the project with Docker.

Navigate to the frontend/ directory and install dependencies:

cd ../frontend  
npm install

In frontend/src, ensure the fetch requests in GetPosts.tsx and PostForm.tsx point to the local backend:

    fetch("http://localhost:3000/endpoint");

Docker Setup

PGURI=PGURI_DOCKER  
PORT=portDocker

Update frontend/src/GetPosts.tsx and frontend/src/PostForm.tsx to point to the Docker backend:

    fetch("http://localhost:3001/endpoint");

Variables to Update

in index.ts
PGURI PGURI_LOCAL PGURI_DOCKER
PORT portLocal portDocker

in frontend/GetPosts and PostForm
Fetch URL from localhost:3000 to localhost:3001

Running the Project
Running Locally

    Start the backend:

cd backend  
npm run start

Start the frontend:

    cd ../frontend
    npm run build

Running With Docker

    Build and start the Docker containers:

    docker-compose up --build

    Ensure the backend is running on localhost:3001 and the frontend on localhost:3000.

Frontend Adjustments

When switching between local and Docker environments, make sure to update the fetch requests in the following files:

    backend/intex.ts
    frontend/src/GetPosts.tsx
    frontend/src/PostForm.tsx
