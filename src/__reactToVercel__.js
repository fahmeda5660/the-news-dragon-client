//1. https://reactrouter.com/ ---> install react dom
//2. firebase: https://console.firebase.google.com/u/0/ --->create--->register--->Authentication:enable(build)
//3. firebase--->firebase.config.js--->export app
//4. react bootsrap--->install--->import css(main.jsx)(default css--->tailwind--->daisy)
//5. main.jsx e route setting na kore ,src folder e new folder korbo, routes--->routes.jsx--->import only createBrowserRouter--->const router = createBrowserRouter--->export default router
//-->main.jsx e RouterProvider
//6. Layouts folder-->Main.jsx-->header,outlet,footer
// Main ke routes er element e set kore dite hobe, Main er children route-->Home
//7. folder pages for all page-->Home-->Home-->Home.jsx
// Folder shared: Header, Footer,Sidebar
// pic -->src-->assets
// momment js-->https://momentjs.com/
// npm install moment --save 
// import moment from 'moment';
// components er vitor button
// https://www.react-fast-marquee.com/
//install--> import--> 
// https://react-icons.github.io/react-icons/
// npm install --save react-rating

// --------------------------------------------------
// --------------------------------------------------
// for server
// https:expressjs.com/en/starter/installing.html
// npm init -y -->make a file called index.js
// npm install express
// nodemon index.js
// categories state in navleft
// CORS policy : http://expressjs.com/en/resources/middleware/cors.html
// npm install cors then for view --> nodemon index.js
// cors require in index.js and call cors
//.gitignore file --> node modules

// CONTEXT API

/***
 * CONTEXT API https://react.dev/reference/react/useContext
 * 1. create context (export)
 * 2. create provider 
 * 3. set context value
 * 4. to access the value: useContext hook
 * 
 * */ 

/***
 * 1. main.jsx set AuthProvider
 * 2. inside provider access children props and then use
 * */ 


/**
 * 1. break down the create user function
 * 2. auth provider will have auth and pass (email and password) from register
 * **/
// manage user-->update user profile


/**
 * 1. Private Route jsx
 *  */ 
 
/**
 * (Observe onAuthStateChange-->manage user-->get the current user signed in)
 * useEfeect, unsubcribe, login-navigate, logout
 * * ------------------
 * private route  STEPS
 * -------------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page: private route and login page e useLocation and change navigate after loggeduser line(from)
 * 4. setup the private router 
 * 5. handle loading(login page abar dekhay: solution: auth provider e loading state, setLoading  true and in private route if loading return spinner)
*/
// Environment variable for Firebase
/*
*https://vitejs.dev/guide/env-and-mode.html
*package.json jekhane sekhane ekta file .env.local
*firebase.congfig.js --> environment variable
*con+alt+downArrow
*shift+alt+rightArrow
*con+shift+p: transform uppercase
*keyboard er end key
* shift end key (config e)
 */

//client-firebase and server-vercel and localhost update 
// login in vercel.com
/*vercel: https://vercel.com/docs/cli: npm i -g vercel --> vercel and check version: vercel --version
*https://jonathans199.medium.com/deploy-node-js-express-api-to-vercel-dbf4461795a5
*vercel.json file add and again command vercel
* firebase hosting : 1 time for 1 pc: npm install -g firebase-tools --->firebase login
* for every project: firebase init
* yes --> hosting configure files--> spacebar for select
*public: dist--> single page: y -->autometic build: no
*npm run build
*firebase deploy
*/ 

// again deply in firebase/update: npm run build --> firebase deploy

//star rating: https://github.com/brillout/awesome-react-components#icons
// npm i @smastrom/react-rating
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'

// github enable: github-->setting-->developer settings-->create new app