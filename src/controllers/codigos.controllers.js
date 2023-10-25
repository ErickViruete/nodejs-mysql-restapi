import {pool} from '../db.js'

export const getCodigos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT*FROM cadenas_python')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal' 
        })
    }
}

export const getCodigo = async (req, res) => {
    try {
        pool.query('USE cadenasdb')
        pool.query('UPDATE cadenas_python SET status = "Verificado" WHERE codigo = ?', [req.params.codigo])
        const [rows] = await pool.query('SELECT*FROM cadenas_python WHERE codigo = ?', [req.params.codigo])
        if (rows[0].status === "Verificado") return res.status(200).json({
            message: `Código verificado previamente, id: ${rows[0].id}. Si esto es un error favor de contactar con GBC`
        })
        if (rows.length <= 0) return res.status(404).json({
            message: 'Código no encontrado, favor de verificar o ingresar otro código'
        }) 
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createCodigo = (req, res) => {
    try {
        res.send('Petición no permitida')
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const updateCodigo = async (req, res) => {
    try {
        res.send('Petición no permitida')
        // const {codigo} = req.body
        // pool.query('USE cadenasdb')
        // pool.query('UPDATE cadenas_python SET status = "Verificado" WHERE codigo = ?', [codigo])
        // const [rows] = await pool.query('SELECT*FROM cadenas_python WHERE codigo = ?', [codigo])
        // res.send(rows )
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deleteCodigo = (req, res) => {
    try {
        res.send('Petición no permitida')
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

