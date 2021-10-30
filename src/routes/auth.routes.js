import {Router} from 'express'
const router = Router()

import * as authControllers from '../controllers/auth.controller'

router.post('/signup', authControllers.signUp)
router.post('/signin', authControllers.signIn)

export default router