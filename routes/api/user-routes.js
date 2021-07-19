
// Require express router
const router = require('express').Router();

// Set requirements 
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend

} = require('../../controllers/users-controller');


// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUsers);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUsersById)
    .put(updateUsers)
    .delete(deleteUsers);

// api/users/** userId/friends/** friendId <POST, DELETE>
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);



// Module export router
module.exports = router;