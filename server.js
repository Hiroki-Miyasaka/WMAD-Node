import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get('/health', (req, res) => {
    res.json({message: "server is running"});
})

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})