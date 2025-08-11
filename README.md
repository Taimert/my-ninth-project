# CineAI - AI-Powered Movie Recommendation Platform

<img width="1341" height="649" alt="project nine" src="https://github.com/user-attachments/assets/e3800633-84af-463e-be62-11d2a6d17c79" />


A full-stack web application that uses AI to recommend movies based on user preferences and mood analysis.

## Features

- 🎬 **AI-Powered Recommendations** - Get personalized movie suggestions
- 💬 **AI Chat Assistant** - Describe your mood and get perfect movie matches
- 🎨 **Sleek Black & Yellow UI** - Modern, eye-catching design
- 🔍 **Advanced Search** - Find movies by mood, actor, or scene description
- 📱 **Responsive Design** - Works on all devices

## Technologies Used

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome Icons
- Responsive Design

### Backend
- Node.js
- Express.js
- REST API Architecture

## Project Structure
project-9/
├── client/ # Frontend files
│ ├── public/ # Static assets
│ │ ├── index.html # Main HTML file
│ │ ├── styles.css # Main stylesheet
│ │ └── scripts.js # Main JavaScript file
│ └── scripts/ # Additional JS modules
│ ├── app.js # Main application logic
│ └── routs # API routes
├── server/ # Backend files
├ ├──node_modules
│ ├── app.js # Express server setup
│ ├── movies.js # Movie-related endpoints
│ │── package-lock.json 
│ └── package.json # Backend dependencies
├── package.json # Root project configuration
└── README.md # This file

## Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Taimert/my-ninth-project.git
   cd project-9
Install backend dependencies

bash
cd server
npm install
Start the development server

bash
node app.js
Open the application

The backend will run on http://localhost:5000

Open client/public/index.html in your browser

API Endpoints
Endpoint	Method	Description
/api/movies	GET	Get all movies
/api/movies	POST	Add a new movie
/api/chat	POST	Get AI recommendations
Future Enhancements
Integrate with OpenAI API for smarter recommendations

Add user authentication

Implement movie database (MongoDB)

Add rating system

Dark/light mode toggle

Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Contact
taimert amen seif eddine -taimertamen@gmail.com

Project Link: https://github.com/Taimert/my-ninth-project
