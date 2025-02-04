import { Router } from 'express'
import moviesController from './moviesController'

const router = Router()

router.get('/api/movies', moviesController.getAllMovies)

export default router