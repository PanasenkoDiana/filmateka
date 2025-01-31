import { prisma } from "./prismaClient"

const movieGenresSelect = [
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
    for (let i = 0; i < movieGenresSelect.length; i++) {
        await prisma.genre.create({
            data: {
                name: movieGenresSelect[i]
            }
        })
    }

    await prisma.movie.create({
        data: {
            title: "The Film",
            rating: 4.9,
            releaseYear: 2014,
            mainLanguage: "English",
            productionCountry: "USA",
            ageRating: "PG-13",
            runtime: 142,
            poster: "https://www.sonypictures.co.uk/sites/unitedkingdom/files/styles/max_n_x_365_/public/2024-10/2481_SP_VENOM_POSTER_1-Sheet_OutNow.jpg?itok=cyDlYZBK",
            shortDescription: "The film description",
            additionalInfo: "no additional info",
            interestingFacts: "no facts",
            genres: {
                connect: [
                    { id: 1 },
                    { id: 2 }
                ]
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