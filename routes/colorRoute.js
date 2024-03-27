import express from "express";
import { isAdmin, requireSignIn } from "../meddleware/authMiddleware.js";
import { colorController, createColorController, deleteColorController, singleColorController, updateColorController} from "../controller/colorController.js";

const router = express.Router();

//create-color
router.post("/create-color", requireSignIn, isAdmin, createColorController);
//update-color
router.put("/update-color/:id", requireSignIn, isAdmin, updateColorController);
//get-color
router.get("/get-color", colorController);
//single-color
router.get("/singel-color/:slug", singleColorController);
//delete-color
router.delete("/delete-color/:id", deleteColorController)



export default router;
