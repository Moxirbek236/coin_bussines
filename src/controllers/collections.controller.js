import Collection from "../models/collection.model.js";

export const createCollection = async (req, res) => {
  const { title, description, image } = req.body;

  const collection = await Collection.create({
    user_id: req.user._id,
    title,
    description,
    image
  });

  res.status(201).json(collection);
};

export const getAllCollections = async (req, res) => {
  const collections = await Collection.find()
    .populate("user_id", "name email")
    .sort({ createdAt: -1 });

  res.json(collections);
};

export const getCollectionById = async (req, res) => {
  const collection = await Collection.findById(req.params.id)
    .populate("user_id", "name email");

  if (!collection) {
    return res.status(404).json({ message: "Kolleksiya topilmadi" });
  }

  res.json(collection);
};

export const updateCollection = async (req, res) => {
  const { title, description, image } = req.body;

  if (title) req.collection.title = title;
  if (description) req.collection.description = description;
  if (image) req.collection.image = image;

  await req.collection.save();

  res.json(req.collection);
};

export const deleteCollection = async (req, res) => {
  await req.collection.deleteOne();
  res.json({ message: "Kolleksiya o‘chirildi" });
};
