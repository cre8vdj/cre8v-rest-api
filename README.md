# ⚡ REST API Demo — Node.js / Express

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js) ![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript) ![License](https://img.shields.io/badge/License-MIT-green)

A clean, production-ready **RESTful API** built with Node.js and Express for managing tasks. Implements full **CRUD** operations with in-memory storage, proper HTTP status codes, input validation, and structured error handling.

---

## ✨ Features

- 📋 Full **CRUD** operations for task management
- ✅ Input validation with descriptive error messages
- 🔢 Auto-incrementing IDs
- 🚦 Proper HTTP status codes (200, 201, 400, 404)
- 📄 JSON request/response format
- 🔒 CORS-ready middleware
- ⚡ Lightweight — no database required (in-memory)
- 🧪 Easy to extend with MongoDB/PostgreSQL

---

## 📸 Demo

```bash
# Get all tasks
curl http://localhost:3000/api/tasks

# Create a task
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Build REST API", "desc": "Using Node.js and Express"}'

# Update a task
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated task", "desc": "Updated description", "done": true}'

# Delete a task
curl -X DELETE http://localhost:3000/api/tasks/1
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Node.js | 18+ | Runtime environment |
| Express.js | 4.x | HTTP framework |
| JavaScript | ES6+ | Language |
| nodemon | dev | Auto-restart on change |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.0.0`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cre8vdj/cre8v-rest-api.git
cd cre8v-rest-api

# Install dependencies
npm install

# Start the server
node server.js

# Or with auto-reload (dev)
npx nodemon server.js
```

Server runs at `http://localhost:3000`

---

## 📎 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|-------------|
| `GET` | `/api/tasks` | Get all tasks | — |
| `GET` | `/api/tasks/:id` | Get task by ID | — |
| `POST` | `/api/tasks` | Create new task | `{ title, desc }` |
| `PUT` | `/api/tasks/:id` | Update task | `{ title, desc, done }` |
| `DELETE` | `/api/tasks/:id` | Delete task | — |

### Example Response

```json
{
  "id": 1,
  "title": "Build REST API",
  "desc": "Using Node.js and Express",
  "done": false,
  "createdAt": "2026-03-26T18:00:00.000Z"
}
```

---

## 📁 Project Structure

```
cre8v-rest-api/
├── server.js         # Main Express app + all routes
├── package.json      # Dependencies & scripts
└── README.md
```

---

## 🚀 Extending This Project

This demo uses in-memory storage. To upgrade to a real database:

```bash
# Add MongoDB support
npm install mongoose

# Add PostgreSQL support
npm install pg sequelize
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

> Built by [cre8vdj](https://www.upwork.com/freelancers/~01fe4edd532e7be28f) · Backend & API Developer
