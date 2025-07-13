[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19931775&assignment_repo_type=AssignmentRepo)
# MERN Bug Tracker

A simple bug tracker application built with the MERN stack, featuring robust testing and debugging practices.

## Features

- Report, view, update, and delete bugs
- Backend: Express, MongoDB, Mongoose
- Frontend: React
- Testing: Jest, Supertest, React Testing Library
- Error handling and debugging tools

## Setup

1. Install dependencies for both backend and frontend:

```bash
cd server && npm install
cd ../client && npm install
```

2. Set up environment variables:

```bash
cp server/.env.example server/.env
# Edit server/.env as needed
```

3. Start the backend:

```bash
cd server
npm run dev
```

4. Start the frontend:

```bash
cd ../client
npm start
```

## Testing

- **Backend:** `cd server && npm test`
- **Frontend:** `cd client && npm test`

## Debugging

- Console logs are present in both client and server.
- Use Chrome DevTools for frontend debugging.
- Use Node.js inspector for backend: `node --inspect src/app.js`
- React ErrorBoundary is implemented for client-side error handling.
- Express error middleware handles server errors.

## Testing Approach

- Unit tests for helper functions and React components.
- Integration tests for API endpoints and UI flows.
- Mocking used for database and API calls.
- Coverage reports generated after tests.

## Intentional Bugs

- There is a typo in the backend bug controller (`descriptin` instead of `description`) to demonstrate debugging.

---

**Happy bug tracking!** 