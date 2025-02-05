import genresRepository from "./genresRepository"

interface IGenresSuccess {
    status: 'success';
    data: any[]
}

interface IGenresError {
    status: 'error';
    message: string
}

async function getAllGenres(): Promise< IGenresSuccess | IGenresError > {
    const data = await genresRepository.getAllGenres()
    if (!data){
        return { status: 'error', message: 'Movies not found' }
    }
    return { status: 'success', data: data }
}

const functions = {
    getAllGenres: getAllGenres
}

export default functions