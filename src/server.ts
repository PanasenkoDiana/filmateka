import express, { Express, Request, Response, Router } from 'express'

const app = express();
const HOST = 'localhost';
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("13123123");
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
     async function recordRecentlyViewedFilm(userId, filmId) {
       await prisma.recentlyViewedFilm.create({
         data: {
           userId: userId,
           filmId: filmId,
         },
       });
     }
     async function getRecentlyViewedFilms(userId) {
       return await prisma.recentlyViewedFilm.findMany({
         where: { userId: userId },
         orderBy: { viewedAt: 'desc' },
         take: 10, // Например, последние 10 фильмов
         include: { film: true },
       });
     }
     
