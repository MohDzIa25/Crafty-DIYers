const express = require('express');
const router = express.Router();
const craftController = require('../controllers/craftController');


router.get('/', craftController.homepage);
router.get('/craft/:id', craftController.exploreCraft );
router.get('/craft/:id/delete', craftController.deleteCraft );
router.get('/categories', craftController.exploreCategories);
router.get('/categories/:id', craftController.exploreCraftbyCategorie);
router.post('/search', craftController.searchCraft );
router.get('/explore-latest', craftController.exploreLatest);
router.get('/explore-random', craftController.exploreRandom);
router.get('/submit-craft', craftController.submitCraft );
router.post('/submit-craft', craftController.submitCraftOnPost);
router.post('/craft/:id/delete', craftController.deleteCraftPost);
 
module.exports = router;