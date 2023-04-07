import express, { Express, Request, Response } from 'express';
import jokesRouter from './routes/jokes.router';

const port = 8000;
const app: Express = express();
app.use(express.json());

app.use("/jokes/api", jokesRouter)



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});