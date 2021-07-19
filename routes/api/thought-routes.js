// Require express router
const router = require('express').Router();

// Set requirements

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thought-controller');


// Get all thought
router
    .route('/')
    .get(getAllThoughts);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

// Setup Post api/thoughts/** userId <POST>
router
    .route('/:userId')
    .post(createThoughts);

// api/thoughts/** thoughtId/reactions <POST>
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// api/thoughts/** thoughtId/reactionId <DELETE>
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


// Module export router
module.exports = router;