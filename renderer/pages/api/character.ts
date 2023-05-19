import { parseData } from "../../ddb-parser/parseData";

const characterUrl = (id) =>
  `https://character-service.dndbeyond.com/character/v5/character/${id}?includeCustomItems=true`;

export default async (req, res) => {
  const characterId = req.query.id;
  const ddb = await fetch(characterUrl(characterId));
  const { data } = await ddb.json();
  const characterData = await parseData(data);
  res.status(200).json(characterData);
};
