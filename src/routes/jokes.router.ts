import { Router } from 'express';
import controller from '../controllers/jokes.controller';

const jokesRouter:Router = Router();

jokesRouter.get('/getRandomJoke', controller.getRandomJoke);

export default jokesRouter;




