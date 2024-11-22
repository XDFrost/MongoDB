import { Router } from "express";
import { addProduct, getAllProducts } from "../controllers/ProductController";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.post("/add-product", addProduct);

export default productRouter;