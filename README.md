 Weather Application - Docker & CI/CD

A weather application built with **Node.js**, **Express**, **HTML/CSS/JavaScript**, containerized with **Docker** and automated with **GitHub Actions**.

---

 Features

* Current weather by city
* Weather forecast
* REST API with Express
* Frontend with HTML/CSS/JavaScript
* Docker containerization
* Multi-container architecture
* CI/CD pipeline with GitHub Actions

---

 Architecture

```
┌─────────────┐
│  Frontend   │
│  Nginx       │
│ Port : 80   │
└──────┬──────┘
       │ HTTP
       ▼
┌─────────────┐
│ Backend API │
│ Node.js     │
│ Express     │
│ Port : 3000 │
└─────────────┘
       │
       ▼
OpenWeatherMap API
```

---

 Project Structure

```
application-meteo-docker-cicd
│
├── backend
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── Dockerfile
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── nginx.conf
│
├── .github
│   └── workflows
│       └── ci-cd.yml
│
├── docker-compose.yml
└── README.md
```

---

 Technologies

* Node.js
* Express.js
* HTML / CSS / JavaScript
* Docker
* Docker Compose
* Nginx
* GitHub Actions
* OpenWeatherMap API

---

 Installation

Clone the repository:

```bash
git clone https://github.com/ramangalahyheriniaina-byte/Application_M-t-o_Docker_-_CICD
cd application-meteo-docker-cicd
```

Build containers:

```bash
docker compose build
```

Run containers:

```bash
docker compose up
```

---

 Access

Frontend:

```
http://localhost
```

Backend API:

```
http://localhost:3000
```

---

 CI/CD Pipeline

The project uses GitHub Actions to:

* Install dependencies
* Build Docker images
* Run tests
* Validate containers
* Deploy automatically

---

Screenshots

## Docker build

![Docker Build]
<img width="832" height="361" alt="image" src="https://github.com/user-attachments/assets/35c4b1a4-1aad-4547-93ec-ddf3d83503c8" />

---

## Running containers

![Docker Compose]
<img width="1050" height="359" alt="image" src="https://github.com/user-attachments/assets/16d510db-e5c9-470f-9060-d65de0c44eb0" />

---

 Author

**Heriniaina Ramangalahy**

Bachelor's Degree in Computer Science
Specialisation: DevOps & System Administration


