import { Request, Response } from 'express';
import service from '../services/jokes.service';


const getRandomJoke = async (req: Request, res: Response):Promise<void> => {
    try {
        const joke = await service.getRandomJokeFromApi();
        res.status(200).json(joke);
    } catch (error:unknown) {
        if(error instanceof Error){
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}

export default { getRandomJoke}
