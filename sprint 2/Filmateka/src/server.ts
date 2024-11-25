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