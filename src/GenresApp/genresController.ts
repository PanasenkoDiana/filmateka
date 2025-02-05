import { Request, Response } from "express"
import genresService from "./genresService"

async function getAllGenres(req: Request, res: Response) {
    const context = await genresService.getAllGenres()
    if (context.status == "error") {
        res.send(context.message)
    } else {
        res.json(context.data)
    }
}

const functions = {
    getAllGenres: getAllGenres
}

export default functions