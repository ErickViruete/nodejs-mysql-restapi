import {Router} from 'express'
import {getCodigos, getCodigo, createCodigo, updateCodigo, deleteCodigo} from '../controllers/codigos.controllers.js'

const router = Router()

router.get('/codigos/', getCodigos)
router.get('/codigos/:codigo', getCodigo)
router.post('/codigos', createCodigo)
router.put('/codigos', updateCodigo)
router.delete('/codigos', deleteCodigo)

export default router 