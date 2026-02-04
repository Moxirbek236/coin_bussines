import express from "express";
import {
  createCollection,
  getAllCollections,
  getCollectionById,
  updateCollection,
  deleteCollection
} from "../controllers/collection.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { isCollectionOwner } from "../middlewares/collectionOwner.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createCollection)
  .get(getAllCollections);

router
  .route("/:id")
  .get(getCollectionById)
  .patch(protect, isCollectionOwner, updateCollection)
  .delete(protect, isCollectionOwner, deleteCollection);

export default router;
