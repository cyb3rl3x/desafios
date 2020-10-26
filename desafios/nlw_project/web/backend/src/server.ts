//rota => app.get('/users', (request, response)
//recurso => /users
/*
Métodos HTTP
GET - Receber uma informação     (Ex.: Buscar usuário)
POST - Criar uma informação      (Ex.: Cadastrar usuário)
PUT - Editar uma informação      (Ex.: Editar usuário)
DELETE - Deletar uma informação  (Ex.: Deletar usuário)

Query Params: http://localhost:3333/users&search=diego
Route Params: http://localhost:3333/users/1
Body: http://localhost:3333/users/1

*/

import express from 'express'
import './database/connection'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)
app.listen(3333)


// Driver nativo, query builder, ORM
/*
Driver nativo - select * from table
Query builder - select('*').from('table')
ORM -  

*/



