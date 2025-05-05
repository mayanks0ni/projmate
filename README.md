## ProjMate – Node-Based Team Collaboration Dashboard
ProjMate is a Node.js-powered collaboration platform designed to help teams manage users, projects, and resources efficiently. It includes authentication, real-time chat, project history tracking, and resource management backed by SQLite databases and an Express.js server.

# 🚀 Features
• User Authentication with OpenID Connect

• Real-time Chat using Socket.io

• Project, Resource, and Member Management

• Activity History Tracking

• SQLite Integration for persistent storage

• Dynamic Dashboard and Chat UI built with EJS and CSS

• AI-Powered Capabilities integrated via Google Generative AI

# 📂 Project Structure
bash
Copy
Edit
ProjMate/
│
├── server.js                 # Main server logic (Express + WebSockets)
├── .env                      # Environment configuration
├── /routes                   # App routes
├── /views                    # EJS view templates
├── /public                   # Frontend styles and static files
├── /utils                    # Helper classes (e.g. user management)
├── /database                 # SQLite DB files for users, projects, etc.
└── package.json              # Dependencies and scripts
🧰 Technologies Used
Node.js with Express.js

Socket.io for real-time features

SQLite3 for lightweight local databases

EJS templating for dynamic web pages

Google Generative AI API for AI features

OpenID Connect for secure user login

🔧 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/projmate.git
cd projmate
Install dependencies:

bash
Copy
Edit
npm install
Set up .env file:

Create a .env file in the root directory with the following (example):

ini
Copy
Edit
PORT=3000
BASE_URL=http://localhost:3000
Run the application:

bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

✅ TODO / Improvements
Admin dashboard and project analytics

File upload and project asset management

Enhanced role-based access control

Deployment scripts (Docker, Vercel, etc.)

📄 License
This project is open source and available under the MIT License.
