import express, { Express, Request, Response, Router } from 'express'
import { prisma } from "../prisma/prismaClient"

const cors = require("cors")

const app = express();
const HOST = 'localhost';
const PORT = 8000;

app.use(cors());

async function getFilms() {
    const films = await prisma.film.findMany()
    console.log(films)
    return films
}

app.get('/api/movies', async (req, res) => {
    res.json(await getFilms());
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});