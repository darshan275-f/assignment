import express from "express";
import path from "path";
import ejsmate from "ejs-mate"
import { bookRouter } from "./routes/book.route.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import methodOverride from "method-override";
import { error } from "console";
const app=express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.json({limit:"14kb"}));
app.use(express.urlencoded({extended:true,limit:"14kb"}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'));
app.engine('ejs',ejsmate);


app.use("/books",bookRouter);
app.get("/",bookRouter);

app.use((req,res,next)=>{
    console.error("error");
    next();
})
export default app;