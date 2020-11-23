import { Router } from 'express';
import linksController from '../controllers/links';

const router = Router();

router.post('/links', linksController.postLink);

router.get('/links/:code', linksController.getLink);

router.get('/links/:code/status', linksController.getLinkStatus);

export default router;
