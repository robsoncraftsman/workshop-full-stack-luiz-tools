import { Request, Response } from 'express';
import { Link } from '../models/link';

const links: Link[] = [];
let nextId = 1;

const generateCode = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const postLink = (req: Request, res: Response): void => {
  const link = req.body as Link;
  link.id = nextId++;
  link.code = generateCode();
  link.hits = 0;
  links.push(link);
  res.status(201).json(link);
};

const getLink = (req: Request, res: Response): void => {
  const code = req.params.code as string;
  const link = links.find((item) => item.code === code);
  if (!link) {
    res.sendStatus(404);
  } else {
    if (link.hits) {
      link.hits++;
    } else {
      link.hits = 1;
    }
    res.status(200).send(link);
  }
};

const getLinkStatus = (req: Request, res: Response): void => {
  const code = req.params.code as string;
  const link = links.find((item) => item.code === code);
  if (!link) {
    res.sendStatus(404);
  } else {
    res.status(200).send(link);
  }
};

export default {
  postLink,
  getLink,
  getLinkStatus,
};
