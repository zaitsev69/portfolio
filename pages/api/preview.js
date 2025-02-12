import { getLinkPreview } from "link-preview-js";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "L'URL est manquante" });
  }

  try {
    const data = await getLinkPreview(url);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des métadonnées" });
  }
}
