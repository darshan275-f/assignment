import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})

app.listen(process.env.PORT,()=>{
    console.log("App is running on ",process.env.PORT)
})

