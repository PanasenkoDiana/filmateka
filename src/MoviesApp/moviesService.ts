import moviesRepository from "./moviesRepository"

interface IMoviesSuccess {
    status: 'success';
    data: any[]
}

interface IMoviesError {
    status: 'error';
    message: string
}

async function getAllMovies(): Promise< IMoviesSuccess | IMoviesError > {
    const movies = await moviesRepository.getAllMovies()
    if (!movies){
        return { status: 'error', message: 'Movies not found' }
    }
    return { status: 'success', data: movies }
}

const functions = {
    getAllMovies: getAllMovies
}

export default functions