import express, { Express, Request, Response, Router } from 'express'
import { prisma } from "../prisma/prismaClient"

const app = express();
const HOST = 'localhost';
const PORT = 8000;

async function getFilms() {
    const films = await prisma.film.findMany()
    console.log(films)
    return films
}

app.get('/', async (req, res) => {
    res.json(await getFilms());
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});