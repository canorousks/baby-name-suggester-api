import express from 'express';
import cors from 'cors';
import routes from './routes/babyname.route.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import "./database/db.js"
import path from "path";
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

var corsOption = {
    origin: ["http://localhost:4000","https://lucky-name-suggester.herokuapp.com/"]
};

app.use(cors(corsOption));

app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/temp.html");
// });

routes(app);

// const PORT = process.env.PORT || 8080;
const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    // console.log(__dirname)
    console.log(`Server is running on port ${PORT}.`);
});