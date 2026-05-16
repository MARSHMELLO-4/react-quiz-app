# React Quiz App

A React-based quiz application with user authentication, quiz categories, score tracking, and protected user dashboards.

## Features

- User registration and login
- Protected routes for authenticated users
- Quiz listing by category or difficulty
- Multiple-choice quiz questions
- Timer-based quiz mode
- Score calculation
- Result summary after quiz completion
- User dashboard
- Quiz history
- Logout functionality
- Responsive UI for desktop and mobile

## Tech Stack

### Frontend
- React
- React Router
- Context API or Redux Toolkit
- Axios or Fetch API
- CSS / Tailwind CSS / Material UI

### Authentication
- JWT-based authentication
- Login and signup forms
- Protected routes
- Token storage using localStorage or secure cookies

### Backend Options
You can use one of the following:

- Firebase Authentication
- Supabase Authentication
- Node.js + Express + MongoDB
- Appwrite
- Auth0

### Recommended Backend for Beginners
Firebase or Supabase is recommended because authentication is easier to set up.

## Pages

### Public Pages
- Home Page
- Login Page
- Register Page
- About Page

### Protected Pages
- Dashboard
- Quiz Categories
- Quiz Page
- Results Page
- Profile Page
- Quiz History Page

## Folder Structure

```txt
react-quiz-app/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── QuizCard.jsx
│   │   ├── QuestionCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Quiz.jsx
│   │   ├── Result.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── quizService.js
│   │
│   ├── data/
│   │   └── questions.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md