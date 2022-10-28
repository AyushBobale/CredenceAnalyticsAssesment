import express from "express";
import cors from "cors"
import'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({origin  : "*"}));


import connectDB from './db.js';
import router from "./routes.js";
import errorHandler from "./errorHandler.js";
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('', router);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running at Port : ${PORT}`)

});
