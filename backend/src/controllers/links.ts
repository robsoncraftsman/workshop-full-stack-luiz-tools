import { Request, Response } from 'express';

const postLink = (req: Request, res: Response): void => {
  res.send('postLink');
};

const getLink = (req: Request, res: Response): void => {
  res.send('getLink');
};

const hitLink = (req: Request, res: Response): void => {
  res.send('hitLink');
};

export default {
  postLink,
  getLink,
  hitLink,
};
