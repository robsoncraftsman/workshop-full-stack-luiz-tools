import { Request, Response } from 'express';
import { Link } from '../models/link';
import linkRepository from '../models/linkRepository';

const generateCode = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const postLink = async (req: Request, res: Response): Promise<void> => {
  const link = req.body as Link;
  link.code = generateCode();
  link.hits = 0;
  const savedLink = await linkRepository.add(link);
  res.status(201).json(savedLink);
};

const hitLink = async (req: Request, res: Response): Promise<void> => {
  const code = req.params.code as string;
  const hitedLink = await linkRepository.hit(code);
  if (!hitedLink) {
    res.sendStatus(404);
  } else {
    res.status(200).send(hitedLink);
  }
};

const getLink = async (req: Request, res: Response): Promise<void> => {
  const code = req.params.code as string;
  const link = await linkRepository.findByCode(code);
  if (!link) {
    res.sendStatus(404);
  } else {
    res.status(200).send(link);
  }
};

export default {
  postLink,
  hitLink,
  getLink,
};
