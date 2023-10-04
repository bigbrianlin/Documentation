Documentation Manager App
This application is a documentation manager that allows users to create, edit, and view documents.It also provides a navigation bar for easy access to different pages and features of the app.The application is built using React for the frontend and Express.js for the backend.

Features
User authentication: Users can register, login, and logout. The navigation bar changes based on the authentication state.
Document management: Users can create new documents, view document details, and edit existing documents. Document details include the title, content, creation date/time, and user.
Navigation: The application includes a navigation bar and a topic navigation menu for easy navigation between different pages and document topics.
Search: Users can search for documents using the search bar in the navigation bar.
History: The application keeps a history of document edits. Users can view the history of a document.
Project Structure
The project is divided into a client and a backend directory.

The client directory contains the React frontend application. It includes components for the layout (Navbar, Topic), pages (NewDocument, EditDocument, DocumentDetails), and the main App component. The package.json file in this directory lists the dependencies for the frontend.
The backend directory contains the Express.js backend server. The package.json file in this directory lists the dependencies for the backend.
Running the Application
You can run the application either without Docker or with Docker.

Without Docker
Navigate to the backend directory and run npm install to install backend dependencies.
Run npm run server to start the backend server.
Navigate to the client directory and run npm install to install frontend dependencies.
Run npm start to start the frontend server.
The application should now be available at localhost:3000.
With Docker
Ensure you have Docker Desktop and Docker installed.
Run docker-compose up to install all packages and start the servers in Docker containers.
If you make changes to the files, run docker-compose up --build to rebuild the images.
Dependencies
The application uses several libraries and tools.Some of the key ones include:

React and ReactDOM for building the user interface
React Router for routing
Semantic UI React for UI components
Axios for making HTTP requests
Express for the backend server
Mongoose for interacting with MongoDB
bcryptjs for password hashing
jsonwebtoken for handling JSON Web Tokens
config for configuration management
Nodemon and concurrently for development tasks
Please refer to the package.json files in the client and backend directories for a full list of dependencies.
