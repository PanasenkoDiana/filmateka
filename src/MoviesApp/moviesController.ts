import { Request, Response } from "express"
import moviesService from "./moviesService"

async function getAllMovies(req: Request, res: Response) {
    const context = await moviesService.getAllMovies()
    if (context.status == "error") {
        res.send(context.message)
    } else {
        res.json(context.data)
    }
}

const functions = {
    getAllMovies: getAllMovies
}

export default functions