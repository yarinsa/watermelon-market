import { stocksService } from "./stocks.service";

async function getStocks(req, res) {
  try {
    const stocks = await stocksService.query(req.query);
    res.json(stocks);
  } catch (err) {
    console.error("Cannot get stocks", err);
    res.status(500).send({ error: "cannot get stocks" });
  }
}
