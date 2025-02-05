import express, { Express, Request, Response, Router } from 'express'

import moviesRouter from "./MoviesApp/moviesRouter"
import genresRouter from "./GenresApp/genresRouter"

const cors = require("cors")

const app = express()
const HOST = 'localhost'
const PORT = 8000

app.use(cors())

app.use("/", moviesRouter)
app.use("/", genresRouter)

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});