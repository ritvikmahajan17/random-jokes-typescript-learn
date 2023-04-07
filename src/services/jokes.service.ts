import axios from 'axios';

export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

const getRandomJokeFromApi = async ():Promise<Joke> => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    return response?.data;
}

export default { getRandomJokeFromApi }

