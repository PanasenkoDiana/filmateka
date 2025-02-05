import moviesRepository from "./moviesRepository"

interface IMoviesSuccess {
    status: 'success';
    data: any[]
}

interface IMovieSuccess {
    status: 'success';
    data: any
}

interface IError {
    status: 'error';
    message: string
}

async function getAllMovies(): Promise< IMoviesSuccess | IError > {
    const movies = await moviesRepository.getAllMovies()
    if (!movies){
        return { status: 'error', message: 'Movies not found' }
    }
    return { status: 'success', data: movies }
}

async function getMovieById(id: number): Promise< IMovieSuccess | IError > {
    const movie = await moviesRepository.getMovieById(id)
    if (!movie){
        return { status: 'error', message: `Movie with id: ${id} not found`}
    }
    return { status: 'success', data: movie }
}

const functions = {
    getAllMovies: getAllMovies,
    getMovieById: getMovieById
}

export default functions