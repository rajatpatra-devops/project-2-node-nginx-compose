# 🚀 Project 2: Node.js App with Nginx Reverse Proxy using Docker Compose

This project demonstrates a basic **Node.js web application** running behind an **NGINX reverse proxy**, all orchestrated using **Docker Compose**.

---

## 🧰 Tech Stack

- Node.js (Express)
- Nginx
- Docker
- Docker Compose

---

## 📁 Project Structure

project-2-node-nginx-compose/
├── node-app/
│ ├── app.js
│ └── Dockerfile
├── nginx/
│ └── default.conf
├── docker-compose.yml
└── README.md


---

## ⚙️ How to Run

> Make sure you have Docker and Docker Compose installed on your system.

# Clone the project
git clone https://github.com/rajatpatra-devops/project-2-node-nginx-compose.git
cd project-2-node-nginx-compose

# Build and start containers
docker-compose up --build

---

🌐 Access the App
Visit your browser:

http://localhost:8081
You will see:
👋 Hello from Node.js App behind NGINX Reverse Proxy!


---

### 💻 Steps to Create & Push README.md to GitHub

#### ✅ 1. Create the file

cd ~/project-2-node-nginx-compose
vi README.md

