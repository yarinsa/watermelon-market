import { placesService } from "./places.service";
async function getPlaces(req, res) {
  try {
    const places = await placesService.query(req.query);
    res.json(places);
  } catch (err) {
    console.error("Cannot get reviews", err);
    res.status(500).send({ error: "cannot get places" });
  }
}
