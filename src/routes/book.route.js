import express, { Router } from "express";
import { getBook,getIndex} from "../controllers/book.controller.js";
const bookRouter=Router();

bookRouter.route("/").get(getIndex);
bookRouter.route("/getBook").get(getBook);

export {bookRouter};