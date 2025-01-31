import { prisma } from "./prismaClient"

const movieGenresSelect = [
    "All Genres",
    "Action",
    "Adventure",
    "Crime",
    "Drama",
    "Fantasy",
    "History",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War"
];

async function main() {
    await prisma.movie.create({
        data: {
            title: "The Film",
            rating: 4.9,
            releaseYear: 2014,
            mainLanguage: "English",
            productionCountry: "USA",
            ageRating: "PG-13",
            runtime: 142,
            shortDescription: "The film description",
            additionalInfo: "no additional info",
            interestingFacts: "no facts",
        }
    })
    
    for (let i = 0; i < movieGenresSelect.length; i++) {
        await prisma.genre.create({
            data: {
                name: movieGenresSelect[i]
            }
        })
    }

    await prisma.movie.update({
        where: {
            id: 1
        },
        data: {
            genres: {
                set: [{ id: 1 }, { id: 2 }, { id: 3 }]
            }
        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })