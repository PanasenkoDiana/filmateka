import express, { Express, Request, Response, Router } from 'express'
import { prisma } from "../prisma/prismaClient"

const cors = require("cors")

const app = express();
const HOST = 'localhost';
const PORT = 8000;

app.use(cors());

async function getMovies() {
    const movies = await prisma.movie.findMany()
    console.log(movies)
    return movies
}

async function getGenres() {
    const genres = await prisma.genre.findMany()
    console.log(genres)
    return genres
}

app.get('/api/movies', async (req, res) => {
    res.json(await getMovies());
});

app.get('/api/genres', async (req, res) => {
    res.json(await getGenres());
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});