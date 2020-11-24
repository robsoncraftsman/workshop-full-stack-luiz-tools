import linkModel, { ILinkModel } from './linkModel';
import { Link } from './link';

const createLink = (linkModel: ILinkModel | null): Link | null => {
  if (!linkModel) return null;
  return { id: linkModel.id, url: linkModel.url, code: linkModel.code, hits: linkModel.hits };
};

const findByCode = async (code: string): Promise<Link | null> => {
  const LinkFromDb = await linkModel.findOne<ILinkModel>({ where: { code } });
  return createLink(LinkFromDb);
};

const add = async (link: Link): Promise<Link | null> => {
  const createdLink = await linkModel.create<ILinkModel>(link);
  return createLink(createdLink);
};

const hit = async (code: string): Promise<Link | null> => {
  const linkFromDb = await linkModel.findOne<ILinkModel>({ where: { code } });
  if (!linkFromDb) return null;
  if (linkFromDb.hits) {
    linkFromDb.hits++;
  } else {
    linkFromDb.hits = 1;
  }
  const savedLink = await linkFromDb.save();
  return createLink(savedLink);
};

export default {
  findByCode,
  add,
  hit,
};
