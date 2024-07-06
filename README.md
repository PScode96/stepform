# React Multi-Step Form

This project implements a responsive multi-step form using React.js, featuring client-side data validation, state management, local storage persistence, and seamless navigation controls.

## Features

- Multi-step Form: Divided into three steps - Personal Information,Address Information,and Confirmation.
- Navigation: Tabbed navigation for switching between steps.
- Validation: Client-side validation for ensuring all fields are filled correctly before proceeding.

- State Management: Uses React hooks (useState, useEffect) for managing form data and navigation state.
- Local Storage: Persists entered data to local storage to retain form state on page refresh or revisit.
- Responsive Design: Ensures usability across desktop, tablet, and mobile devices.

## Setup Instructions

To run this project locally, follow these steps:
1. Clone the repository:
    git clone <repository-url>
    cd <repository-folder>
2. Install dependencies:

Ensure you have Node.js installed on your machine. Then, install project dependencies using npm:

- npm install react 
- npm install react-dom
3. Start the development server:
-  npm start

This command will start the development server and open the application in your default web browser.

## Usage
- Fill out the form: Navigate through the steps using the tabbed navigation.
- Validation: Ensure all fields are filled correctly before proceeding to the next step.
- Local Storage: Data entered is saved locally, allowing you to return to the form without losing progress.

## Technologies Used
- React.js
- HTML5
- CSS3(Sass for styling)