import { prisma } from "../../prisma/prismaClient"

async function getAllGenres() {
    try {
        const data = await prisma.genre.findMany()
        console.log(data)
        return data
    } catch (error) {
        console.error("Error getGenres: ", error);
        throw error;
    }
}

const functions = {
    getAllGenres: getAllGenres
}

export default functions