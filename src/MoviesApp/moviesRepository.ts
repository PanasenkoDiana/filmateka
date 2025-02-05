import { prisma } from "../../prisma/prismaClient"

async function getAllMovies() {
    try {
        const movies = await prisma.movie.findMany({
            include: {
                genres: true
            }
        })
        console.log(movies)
        return movies
    } catch (error) {
        console.error("Error getMovies: ", error);
        throw error;
    }
}

const functions = {
    getAllMovies: getAllMovies
}

export default functions