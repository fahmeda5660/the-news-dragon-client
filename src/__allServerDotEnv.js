/*
server make, client site make,
CRUD, basic error check in mongo,
eslintrc, dotenv
map, custom hook
imgbb
*/ 


// Server Make--------------------------------------------------------------------

/*
 * User management server
 * mkdir user-management-server
 * cd user-management-server
 * npm init -y
 * code .
 * package.json er script e likhbo "start": "node index.js",
 * npm i express cors mongodb dotenv jsonwebtoken
 * .gitignore -->node_modules     .env
 * https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
 * nodemon index.js
 * check app.get route
 * require express, cors, mongodb, dotenv
 * 
 * middleware: app.use(cors()); --> app.use(express.json());
 * go in mongodb
 */ 

// Client Site----------------------------------------------------------------

/*
 * Client site:https://reactrouter.com/
 * npm create vite@latest name-of-your-project -- --template react
 * cd car-doctor-client
 * npm install react-router-dom localforage match-sorter sort-by
 * react bootsrap--->install--->import css(main.jsx)(default css--->tailwind--->daisy)
 * daisy
 * eslintrc
 * route set :react router (routes in src)
 * / 

/*
 * 1. create a post api on the server side
 * 2. client side send data via post :https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 3. set fetch method inside the fetch options (second parameter)
 * 4. options will have three things: method
 * 5. options will have headers: 'content-type': 'application/json'
 * 6. don't forget to send data by JSON.Stringify in the body: 
 * 7. On the server side: don't forget to use express.json() middleware
*/

// CRUD----------------------------------------------------------------------------
/**
 * -------------------------
 * MOngodb Connection
 * --------------------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > View full code 
 * 5. change the password the uri
 * ----------------------------
 * 1. CREATE --- POST
 * 2. app.post('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body 
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * 
 * CLIENT
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': 'application/json'}
 * 5. add body: JSON.Stringify(user)
 * -----------------------
 * READ MANY
 * ------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * -----------------------------
 * DELETE
 * -----------------------------
 * 1. create app.delete('/users/:id', async(req, res) =>{})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = { _id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * Client
 * 1. create dynamic url with id
 * 2. mention the DELETE method 
*/

//Basic Check Error in Mongo ---------------------------------------------------
/*https://gitmind.com/app/docs/mfl995is
১. দেখো যে কানেকশন স্ট্রিং ঠিক আছে কিনা। যদি কানেকশন স্ট্রিং এ <password> বা <dbname> এই টাইপের কিছু থাকে তাহলে সেটা ঠিক করতে হবে। 

২. যদি ইউজার বা পাসওয়ার্ড নিয়ে নিশ্চিত না হও তাহলে atlas এ গিয়ে ক্লাস্টার এর নিচে database একসেস এ গিয়ে নতুন ইউজার খুলে তার ইউজার নেম আর পাসওয়ার্ড দিয়ে ট্রাই করো 

৩. network access এ গিয়ে connect from anywhere দিয়ে দাও। IP এড্রেস ০.০.০.০.

৪. কোড এর মধ্যে সব ঠিক করে করছো কিনা ট্রাই করো। দরকার হলে কোড রিমুভ করে আবার নতুন করে শুরু করো। 

৫. চেক করো "client.close()" লেখা কমেন্ট করা আছে কিনা। 

৬. express, mongodb, cors ঠিকমতো ইন্স্টল্ করছো কিনা 

৭. middleware ঠিক মতো বসাইছো কিনা 

৮. nodemon এর সার্ভার Ctrl+C মেরে স্টপ করে আবার নতুন করে স্টার্ট করে দিয়ে দেখো। কাজ হয় কিনা।
*/

// eslintrc--------------------------------------------------------------------------
/**
 * add node: true for ignoring eslintrs error
 * -->env: { browser: true, es2020: true, node: true },
 * 
 * props types eslintrc in eslintrc: -->   rules: {
    'react-refresh/only-export-components': 'warn',
    "react/prop-types":"off"
  },
 */

// dotenv--------------------------------------------------------------------
/**
 * * npm i express cors mongodb dotenv
 * https://www.npmjs.com/package/dotenv
 * npm install dotenv --save
 * server --> index.js -->require('dotenv').config()
 * 
 * Create a .env file in the root of your project: 
 * S3_BUCKET=YOURS3BUCKET
 * SECRET_KEY=YOURSECRETKEYGOESHERE
 * console.log(process.env.DB_USER); from index.js
 * */ 
// IMGBB--------------------------------------------
// * for upload img: https://imgbb.com/ -->direct links-->png

// MAP------------------------------------------------------------------
/**
 * https://react-google-maps-api-docs.netlify.app/
 * npm install --save @react-google-maps/api --force
 * */ 
// Custom hook: ttitle-------------------------------------------------------
/*
 * src -->hook-->usetitle.js
 * import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - Dragon News`;
    },[title])
}
 export default useTitle;
 * 
 * and call from page: useTitle("Home");
 */ 
