/**
 * User management server
 * mkdir user-management-server
 * cd user-management-server
 * npm init -y
 * code .
 * package.json er script e likhbo "start": "node index.js"
 * npm i express cors
 * .gitignore -->node_modules
 * https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
 * nodemon index.js
 * check app.get route
 * require cors, and use cors
 * 
 * 
 * make: client site: react router
 * ***/ 

/**
 * 1. create a post api on the server side
 * 2. client side send data via post :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 3. set fetch method inside the fetch options (second parameter)
 * 4. options will have three things: method
 * 5. options will have headers: 'content-type': 'application/json'
 * 6. don't forget to send data by JSON.Stringify in the body: 
 * 7. On the server side: don't forget to use express.json() middleware
*/