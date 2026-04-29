import 'dotenv/config'
import  Express  from 'express'
import { router } from './router.js'
const app = Express();

app.use(Express.json); // Assim ele lê json

app.use(router); // Rotas

app.listen(3000, () => {
    console.log("Servidor Rodando em http://localhost:3000")
})

