import express from 'express';
import controllers from '../controllers/controller';

const router = express.Router();

router.get('/api-one', controllers.fetchOne);
router.get('/api-two', controllers.fetchTwo);
router.get('/api-three', controllers.fetchThree);
router.get('/api-four', controllers.fetchFour);
router.get('/api-five', controllers.fetchFive);
router.get('/api-six', controllers.fetchSix);
router.get('/api-seven', controllers.fetchSeven);
router.get('/api-eight', controllers.fetchEight);
router.get('/api-nine', controllers.fetchNine);
router.get('/api-ten', controllers.fetchTen);



export default router;
