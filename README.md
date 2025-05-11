# Newsletter Form App

This is a React application for managing newsletter subscriptions. It provides a user-friendly interface for users to subscribe to newsletters and for administrators to manage subscribers.

## Features

- **Dark/Light Mode**: Theme toggle functionality for better user experience
- **Subscription Form**: Collect user information with validation
- **Subscriber Management**: View and delete subscribers
- **Responsive Design**: Works well on desktop and mobile devices

## Project Structure

The project is organized into the following structure:

```
newsletter-form-fe
├── public
│   ├── index.html          # Main HTML file for the React app
│   └── favicon.ico         # Favicon for the app
├── src
│   ├── api
│   │   ├── apiClient.js    # Handles API requests
│   │   └── endpoints.js    # Defines API endpoints
│   ├── components
│   │   ├── common
│   │   │   ├── Button.jsx        # Reusable button component
│   │   │   ├── Checkbox.jsx      # Basic checkbox component
│   │   │   ├── CheckBoxList.jsx  # Component for lists of checkboxes
│   │   │   ├── FormField.jsx     # Reusable form field component
│   │   │   └── ThemeToggle.jsx   # Dark/light mode toggle
│   │   ├── layout
│   │   │   ├── Header.jsx        # Header component with navigation
│   │   │   └── Footer.jsx        # Footer component
│   │   └── subscriber
│   │       └── SubscriberForm.jsx # Form for capturing subscriber details
│   ├── pages
│   │   ├── HomePage.jsx           # Home page with subscription form
│   │   └── SubscriberListPage.jsx # Page for managing subscribers
│   ├── utils
│   │   └── validators.js          # Utility functions for form validation
│   ├── App.jsx                    # Main application component with routing
│   ├── index.js                   # Entry point of the React application
│   └── index.css                  # Tailwind CSS configuration
├── package.json                   # Project dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration for Tailwind
├── .gitignore                     # Specifies ignored files and directories
├── .env                           # Environment variables (not committed)
└── README.md                      # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd newsletter-form-fe
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following content:
   ```
   REACT_APP_API_BASE_URL=http://your-api-url.com/api
   ```
   Replace the URL with your actual API endpoint.

4. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

```
npm run build
```

This will create optimized files in the `build` directory that can be deployed to a web server.

## Technologies Used

- React 19
- React Router 7
- Tailwind CSS 3
- Axios for API requests

## License

This project is licensed under the MIT License.