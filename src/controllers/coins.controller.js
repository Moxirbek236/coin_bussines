import Coin from "../models/coin.model.js";

export const createCoin = async (req, res) => {
  const coin = await Coin.create(req.body);
  res.status(201).json(coin);
};

export const getAllCoins = async (req, res) => {
  const coins = await Coin.find().sort({ createdAt: -1 });
  res.json(coins);
};

export const getCoinById = async (req, res) => {
  const coin = await Coin.findById(req.params.id);

  if (!coin) {
    return res.status(404).json({ message: "Coin topilmadi" });
  }

  res.json(coin);
};

export const updateCoin = async (req, res) => {
  const coin = await Coin.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!coin) {
    return res.status(404).json({ message: "Coin topilmadi" });
  }

  res.json(coin);
};

export const deleteCoin = async (req, res) => {
  const coin = await Coin.findByIdAndDelete(req.params.id);

  if (!coin) {
    return res.status(404).json({ message: "Coin topilmadi" });
  }

  res.json({ message: "Coin ochirildi" });
};
