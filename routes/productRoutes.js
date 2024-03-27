import express from "express";
import { isAdmin, requireSignIn } from "../meddleware/authMiddleware.js";

import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productColorController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  productSizeController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//Delete Products
router.delete("/delete-product/:pid", deleteProductController);

//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//filter product
router.post("/product-filters", productFiltersController);

//category wise Product
router.get("/product-category/:slug", productCategoryController);
//color wise Product
router.get("/product-color/:slug", productColorController);
//size wise Product
router.get("/product-size/:slug", productSizeController)
//search Product
router.get("/search/:keyword", searchProductController);

export default router;
