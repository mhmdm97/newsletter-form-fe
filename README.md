# Newsletter Form App

This is a simple React application for managing newsletter subscriptions. It provides a user-friendly interface for users to subscribe to newsletters and select their communication preferences and interests.

## Project Structure

The project is organized into the following structure:

```
newsletter-form-app
├── public
│   ├── index.html          # Main HTML file for the React app
│   └── favicon.ico         # Favicon for the app
├── src
│   ├── api
│   │   ├── apiClient.js    # Handles API requests
│   │   └── endpoints.js     # Defines API endpoints
│   ├── components
│   │   ├── common
│   │   │   ├── Button.jsx   # Reusable button component
│   │   │   ├── FormField.jsx # Reusable form field component
│   │   │   └── Checkbox.jsx  # Reusable checkbox component
│   │   ├── layout
│   │   │   ├── Header.jsx    # Header component for the layout
│   │   │   └── Footer.jsx     # Footer component for the layout
│   │   └── subscriber
│   │       ├── SubscriberForm.jsx # Main form for capturing subscriber details
│   │       └── InterestSelect.jsx  # Component for selecting interests
│   ├── pages
│   │   ├── HomePage.jsx      # Home page component
│   │   └── SubscriptionPage.jsx # Subscription page component
│   ├── utils
│   │   └── validators.js      # Utility functions for form validation
│   ├── App.jsx                # Main application component
│   ├── index.js               # Entry point of the React application
│   └── index.css              # Main CSS file for styling
├── package.json               # Project dependencies and scripts
├── .gitignore                 # Specifies files and directories to ignore in version control
├── .env                       # Environment variables for the application
└── README.md                  # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd newsletter-form-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License.