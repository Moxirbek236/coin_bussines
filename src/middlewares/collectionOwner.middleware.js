import Collection from "../models/collection.model.js";

export const isCollectionOwner = async (req, res, next) => {
  const collection = await Collection.findById(req.params.id);

  if (!collection) {
    return res.status(404).json({ message: "Kolleksiya topilmadi" });
  }

  if (collection.user_id.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Ruxsat yoq" });
  }

  req.collection = collection;
  next();
};
