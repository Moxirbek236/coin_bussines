import express from "express";
import {
  createCoin,
  getAllCoins,
  getCoinById,
  updateCoin,
  deleteCoin
} from "../controllers/coin.controller.js";

const router = express.Router();

router.route("/")
  .post(createCoin)
  .get(getAllCoins);

router.route("/:id")
  .get(getCoinById)
  .patch(updateCoin)
  .delete(deleteCoin);

export default router;
