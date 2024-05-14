# Logging System with React Log Viewer

This project implements a logging system in a Node.js/Express backend using Winston for logging, and a React frontend with a log viewer component to display the logs. The logging system allows configuring different log levels and file paths for each API endpoint.

## Features

- **Configurable Logging Levels**: Each API endpoint can have different logging levels such as `info`, `error`, or `success`.
- **Flexible Log File Configuration**: Log files can be configured per API endpoint, allowing for better organization and management of log data.
- **Structured Log Format**: Logs are formatted as JSON objects with timestamp, log level, log message, and source metadata.
- **React Log Viewer**: The frontend provides a log viewer component to display log entries in a table-like view for easier readability and navigation.

## Installation

### Backend (Node.js/Express)

1. Clone the repository:

   ```bash
   git clone https://github.com/shashanksanket/chat-360
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm i && run build
   ```

4. Start the backend server:

   ```bash
   npm run start
   ```

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install && run build
   ```

3. Start the React development server:

   ```bash
   npm run start
   ```

## Usage

- Once both the backend and frontend servers are running, you can access the log viewer in your browser at `http://localhost:3000`.
- The log viewer will display log entries fetched from the backend server and provide a table-like view with columns for timestamp, log level, log message, and source.

## Configuration

- Logging configuration is managed using the `logging.config.json` file in the backend.
- Each API endpoint can be configured with different logging levels and file paths for log storage.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
