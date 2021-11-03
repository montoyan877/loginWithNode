import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import {createRoles} from './libs/initialSetup'

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/users.routes'

const app = express()
createRoles()

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        descripcion: app.get('pkg').descripcion,
        version: app.get('pkg').version
    })
}) 

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app
