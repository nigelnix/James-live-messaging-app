# Barebones React frontend with Express backend

Run `npm install` in three places:
* In the root directory
* In the backend directory
* In the frontend directory

Then run `npm start` in the root folder to start both frontend and backend.

Or copy and paste the following lines into your Terminal and press Enter:

```
npm install
cd backend && npm install
cd ../frontend && npm install
cd .. && npm start
```

http://localhost:3000 shows barebones Express backend

http://localhost:3001 shows barebones React frontend


* The backend is the boilerplate created with `npx express-generator backend`, plus:
  + CORS to allow a connection to any route from any source

* The frontend is a stripped down version of a project created with `npx create-react-app frontend`, plus:
  + REACT_APP_BACKEND_PORT is set to 3000 in the "start" script for the frontend, to make it simple to connect to the backend
  + App.js fetches a string from and endpoint in the backend and displays it.

* The parent directory uses the `kill-port` module so that the `npm start` script in the root directory can kill any processes currently using the ports 3000 and 3001. The frontend and backend can then use these ports with no problems.
