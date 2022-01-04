import express from 'express';
import cors from 'cors';
import routes from './routes/babyname.route.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

var corsOption = {
    origin: "http://192.168.137.232"
};

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/temp.html");
});

routes(app);

// const PORT = process.env.PORT || 8080;
const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log(__dirname)
    console.log(`Server is running on port ${PORT}.`);
});