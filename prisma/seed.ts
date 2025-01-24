import { prisma } from "./prismaClient";

async function newFilm() {
    const newFilm = await prisma.film.create({
        data: {
            title: "volter",
            releaseYear: 2014,
            mainLanguage: "eng",
            productionCountry: "england",
            ageRating: "42+"
        },
    })
}

newFilm()