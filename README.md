# Blog Website with React, Firebase Authentication, and Node.js Backend

## Project Overview

This project is a full-stack blog website built using **React** for the frontend and **Node.js** with **Express** for the backend. It integrates **Firebase Authentication** to handle user login, signup, and session management. The website allows users to view articles, upvote them, and leave comments after authentication.

### Key Features

- **User Authentication**: Firebase Authentication is used for handling user authentication. Users can sign up, log in, and interact with articles based on their authentication status.
- **Upvoting System**: Authenticated users can upvote articles, with each user allowed a single upvote per article. The system prevents duplicate upvotes by the same user.
- **Commenting System**: Authenticated users can comment on articles, adding interactivity to the blog posts.
- **Article Management**: Articles are displayed dynamically, and the backend fetches article data from a MongoDB database.
- **Responsive Frontend**: The website is built using React, ensuring that the UI adapts to various screen sizes and devices.

### Technologies Used

#### Frontend

- **React**: Used to build the user interface, manage state, and handle routing via **React Router**.
- **Firebase Authentication**: For handling user sign-ups, logins, and authentication state management.
- **Axios**: To handle HTTP requests between the frontend and backend services.

#### Backend

- **Node.js**: Server-side JavaScript runtime used to create a highly scalable backend.
- **Express.js**: A web framework for building RESTful API endpoints and handling requests.
- **Firebase Admin SDK**: Used to verify Firebase authentication tokens and manage secure interactions between the backend and authenticated users.
- **MongoDB**: A NoSQL database for storing articles, upvotes, and comments.

## Frontend Functionality

### ArticlePage Component

This React component displays articles, manages upvotes, and allows users to comment on the articles. It dynamically updates based on the user’s login state and the article's current data (upvotes, comments, etc.).

- **Upvotes**: Users can upvote an article only once. The upvote status is tied to their user ID, which is stored in Firebase.
- **Comments**: The `AddCommentForm` component allows authenticated users to leave comments. Comments are tied to the user's email address retrieved from Firebase.

### Custom Hook (`useUser`)

The `useUser` hook is a custom hook designed to retrieve and manage the authenticated user's information from Firebase. It also ensures that the user's token is sent securely to the backend for verification.

## Backend Functionality

### Node.js and Express.js API

The backend, powered by **Node.js** and **Express.js**, is responsible for handling requests such as fetching articles, managing upvotes, and processing comments. It communicates with the MongoDB database for data persistence and uses Firebase Admin SDK for verifying user tokens.

#### Key API Endpoints

- **`GET /api/articles/:name`**: Fetches an article by its name. If a user is authenticated, it checks whether the user has already upvoted the article.
- **`PUT /api/articles/:name/upvote`**: Allows authenticated users to upvote an article. It prevents duplicate upvotes by storing user IDs.
- **`POST /api/articles/:name/comments`**: Allows authenticated users to post comments. The comments are associated with the user's email address.

### Firebase Authentication

On the backend, Firebase Admin SDK is used to verify the authentication token sent from the frontend. This ensures that only authenticated users can perform specific actions like upvoting and commenting.

- **Token Verification**: Before processing any API requests requiring authentication (upvotes or comments), the backend middleware verifies the Firebase token sent in the headers.
- **User Identification**: Once the token is verified, the backend extracts the user's unique ID (UID) and email to track upvotes and comments.

## Project Architecture

### Frontend

- **React Components**: 
  - `ArticlePage`: Handles article display, upvotes, and comments.
  - `AddCommentForm`: Displays a form for authenticated users to add comments.
  - `CommentsList`: Shows all comments for a particular article.

- **Hooks**:
  - `useUser`: Retrieves and manages Firebase authentication state and user information.

### Backend

- **Node.js/Express Server**:
  - Routes to handle fetching articles, upvotes, and comments.
  - Firebase token verification middleware.
  - MongoDB connection and query logic for managing articles and user interactions.

- **MongoDB**: Stores article data including upvote counts, upvoting users' IDs, and comments.
