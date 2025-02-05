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

async function getMovieById(id: number) {
    try {
        const movie = await prisma.movie.findFirst({
            where: {
                id: id
            },
            include: {
                genres: true
            }
        })
        console.log(movie)
        return movie
    } catch (error) {
        console.error("Error getMovieById: ", error);
        throw error;
    }
}

const functions = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById
}

export default functions