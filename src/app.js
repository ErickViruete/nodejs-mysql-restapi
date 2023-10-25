import express from 'express'
import codigosRoutes from './routes/codigos.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'

const app = express ()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', codigosRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: 'No encontrado'
    })
})

export default app;