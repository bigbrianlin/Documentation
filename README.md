# Documentation Manager App    
The Documentation Manager App is a robust and user-friendly tool designed to simplify the management of documents. It leverages the power of React for the frontend and Express.js for the backend, providing a seamless experience for users to create, edit, and view documents effortlessly.  

## Key Features 🔑  
### User Authentication  
Easily register, log in, and log out to ensure secure access to your documents.  
### Document Management  
Streamlined creation, viewing, and editing of documents for a hassle-free experience.  
### Navigation  
Intuitive navigation bar allows users to seamlessly move between different pages and document topics.  
### Search  
Quickly find documents using our built-in search bar, ensuring you can locate information in seconds.  
### History  
Keep track of document edits with our history feature, allowing you to monitor changes and revisions.  
## Project Structure 📁  
The project is organized into two main directories:  

### client  
Contains the frontend application built using React.  
### backend  
Houses the backend server implemented with Express.js.  
## How to Run 🏃  
### Without Docker 💻  
1. Navigate to the ```backend``` directory, run ```npm install```, and then ```npm run server```.  
2. Navigate to the ```client``` directory, run ```npm install```, and start the app with ```npm start```.  
3. Open your web browser and go to ```localhost:3000``` to access the application.  
### With Docker 🐳  
1. Make sure Docker Desktop is installed on your system.  
2. Run ```docker-compose``` up to start the app.  
3. For any changes, rebuild the containers using ```docker-compose up --build```.  
## Dependencies 🔧  
Key libraries and tools used in this project include:  

- React  
- ReactDOM  
- React Router  
- Semantic UI React  
- Axios  
- Express  
- Mongoose  
- bcryptjs  
- jsonwebtoken  
- config  
- Nodemon  
- concurrently  

For a comprehensive list of dependencies, please refer to the ```package.json``` files in both the ```client``` and ```backend``` directories.  

Feel free to use and customize this Documentation Manager App to streamline your document management needs. If you have any questions or need further assistance, don't hesitate to reach out to our support team. Happy documenting! 📝✨  
