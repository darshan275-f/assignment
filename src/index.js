import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("App is running on ",process.env.PORT)
})

