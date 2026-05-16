
**REQUIREMENTS.md**

```md
# Requirements Document

## Project Name

React Quiz App with Authentication

## Objective

The objective of this project is to build a secure and responsive quiz application where users can register, log in, take quizzes, view scores, and track quiz history.

## Users

### Guest User
A guest user can:
- View the home page
- Register for an account
- Log in to an existing account

### Authenticated User
An authenticated user can:
- Access the dashboard
- View quiz categories
- Attempt quizzes
- View results
- View quiz history
- Manage profile
- Log out

## Functional Requirements

### Authentication

- The app must allow users to register.
- The app must allow users to log in.
- The app must allow users to log out.
- The app must protect private routes.
- The app must prevent unauthenticated users from accessing quiz pages.
- The app must show validation errors for invalid login or signup details.

### User Registration

Required fields:
- Name
- Email
- Password
- Confirm password

Validation:
- Email must be valid.
- Password should have a minimum length of 6 characters.
- Confirm password must match password.

### User Login

Required fields:
- Email
- Password

Validation:
- Email and password are required.
- Invalid credentials should show an error message.

### Dashboard

The dashboard must display:
- Welcome message
- Total quizzes attempted
- Best score
- Recent quiz attempts
- Button to start a new quiz

### Quiz Module

The quiz module must:
- Display available quiz categories.
- Allow users to select a quiz.
- Show one question at a time or all questions at once.
- Display multiple-choice answers.
- Allow users to select only one answer per question.
- Track selected answers.
- Calculate final score.
- Show result after submission.

### Result Module

The result page must show:
- Total questions
- Correct answers
- Wrong answers
- Final score
- Percentage
- Pass/fail status
- Option to retake quiz
- Option to go back to dashboard

### Quiz History

The app must store and display:
- Quiz name
- Score
- Date attempted
- Total questions
- Correct answers

### Profile

The profile page must show:
- User name
- Email
- Account creation date
- Total quizzes attempted

## Non-Functional Requirements

### Performance

- App should load quickly.
- Quiz pages should respond immediately to user input.
- State updates should not cause unnecessary re-renders.

### Security

- Passwords must not be stored in plain text.
- Authentication tokens should be handled securely.
- Protected routes must not be accessible without login.
- Sensitive user data should not be exposed in frontend code.

### Usability

- UI should be simple and beginner-friendly.
- App should work on mobile, tablet, and desktop.
- Error messages should be clear.
- Buttons and forms should be easy to understand.

### Reliability

- App should handle API errors gracefully.
- User should not lose quiz progress accidentally.
- Invalid routes should show a 404 page.

## Suggested Components

```txt
Navbar
Footer
LoginForm
RegisterForm
ProtectedRoute
QuizCard
QuestionCard
AnswerOption
Timer
ResultSummary
DashboardStats
HistoryTable
ProfileCard