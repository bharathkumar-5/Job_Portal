# MERN-Job Portal 🚀

![MERN-Job Portal](https://img.shields.io/badge/MERN-Stack-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Version](https://img.shields.io/badge/Version-1.0.0-orange)

## 📌 Overview
MERN-Job Portal is a modern job listing and recruitment platform built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. It enables employers to post job openings and job seekers to explore and apply for positions with ease.

---

## 🔥 Features
✅ User Authentication (Firebase)
✅ Job Posting & Management
✅ Search & Filter Jobs
✅ Update & Delete Jobs
✅ Real-time Data Handling
✅ Interactive UI with Tailwind CSS
✅ Responsive & Mobile Friendly
✅ Secure API & Database Operations

---

## 🛠️ Tech Stack
**Frontend:** React.js, React Router, Tailwind CSS, React Select, React Hook Form

**Backend:** Node.js, Express.js, MongoDB

**Authentication:** Firebase

**Deployment:** Vercel (Frontend), Render (Backend)

---

## 📂 Project Structure
```
MERN-Job-Portal/
│── server/        # Backend (Node.js, Express, MongoDB)
│── client/        # Frontend (React, Vite, Tailwind CSS)
│── .env           # Environment Variables
│── package.json   # Dependencies
│── README.md      # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas Account
- Firebase Project for Authentication

### Installation
#### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/yourusername/MERN-Job-Portal.git
$ cd MERN-Job-Portal
```
#### 2️⃣ Setup Backend (Server)
```sh
$ cd server
$ npm install  # Install dependencies
$ touch .env   # Create environment file
```
**Configure `.env` file:**
```env
PORT=5000
DB_USER=yourMongoDBUsername
DB_PASSWORD=yourMongoDBPassword
```
**Run the Server:**
```sh
$ npm run server  # Start backend using nodemon
```

#### 3️⃣ Setup Frontend (Client)
```sh
$ cd client
$ npm install  # Install dependencies
```
**Run the Client:**
```sh
$ npm run dev  # Start React app
```

---

## 🔌 API Endpoints
| Method | Endpoint        | Description        |
|--------|---------------|-------------------|
| GET    | /all-jobs      | Fetch all jobs    |
| GET    | /all-jobs/:id  | Get a single job  |
| POST   | /post-job      | Post a new job    |
| PATCH  | /update-job/:id | Update job details |
| DELETE | /job/:id       | Delete a job      |

---

## 🎨 UI Preview
🚀 **Job Listings Page**

![Job Listings](https://via.placeholder.com/800x400?text=Job+Listings+UI)

📌 **Job Details & Apply**

![Job Details](https://via.placeholder.com/800x400?text=Job+Details+UI)

---

## 🎯 Future Enhancements
- ✅ Apply for Jobs Feature
- ✅ User Profiles (Job Seeker & Employer)
- ✅ Resume Upload & ATS Integration
- ✅ Payment Gateway for Premium Job Listings

---

## 🤝 Contributing
Want to contribute? Great! Follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a **Pull Request**

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 🌟 Show Your Support
If you like this project, don't forget to **⭐ Star the repository**!

👨‍💻 **Developed by Bharath Kumar**

