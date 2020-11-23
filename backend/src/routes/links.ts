import { Router } from 'express';

const router = Router();

router.post('/links', (req, res) => {
  res.send('POST');
});

router.get('/links/:code', (req, res) => {
  res.send('GET');
});

router.get('/links/:code/status', (req, res) => {
  res.send('GET status');
});

export default router;
