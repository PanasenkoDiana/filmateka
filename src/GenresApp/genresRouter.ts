import { Router } from 'express'
import genresController from './genresController'

const router = Router()

router.get('/api/genres', genresController.getAllGenres)

export default router