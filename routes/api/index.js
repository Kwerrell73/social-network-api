// Express Router Requirements
const router = require('express').Router();

//Set user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

// add prefix of `/thought` to routes created in `user-routes.js`
router.use('/thought', thoughtRoutes);

//Export Module
module.exports = router;