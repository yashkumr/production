import express from "express";
import { isAdmin, requireSignIn } from "../meddleware/authMiddleware.js";
import {
  createSizeController,
  deleteSizeController,
  singleSizeController,
  sizeController,
  updateSizeController,
} from "../controller/sizeController.js";

const router = express.Router();

router.post("/create-size", requireSignIn, isAdmin, createSizeController);
//update-size
router.put("/update-size/:id", requireSignIn, isAdmin, updateSizeController);
//get-size
router.get("/get-size", sizeController);
//single-size
router.get("/single-size/:slug", singleSizeController);
//delete-size
router.delete("/delete-size/:id", deleteSizeController);
export default router;
