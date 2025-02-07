import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/recently-viewed', async (req, res) => {
    const userId = parseInt(req.query.userId as string);
    if (!userId) {
        return res.status(400).json({ error: "userId is required" });
    }

    try {
        const recentlyViewed = await prisma.recentlyViewedFilm.findMany({
            where: { userId },
            orderBy: { viewedAt: 'desc' },
            take: 10,
            include: { film: true },
        });
        res.json(recentlyViewed);
    } catch (error) {
        res.status(500).json({ error: "Ошибка загрузки данных" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
