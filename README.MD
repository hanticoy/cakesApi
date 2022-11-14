# NOTA:
Para restringir los parametros de salida de una API debemos trabajar la programacion reactiva, ver http://reactivex.io

Para ejecutar requiere instalar:
npm install express mongoose cors

npm install         : tambien se puede usar pero se basa en el package.json

# Cuando hay error:
Access to XMLHttpRequest at 'http://localhost:5200/queryAll' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

NOTA PERSONAL
//habilitar comunicación entre los servidores con puerto
npm install cors
//en archivo server.js habilitar comunicación entre los servidores con puerto
const cors = require('cors')
app.use(cors());



# Modo de uso:

GET: Recupera todas las tareas
http://localhost:5200/queryAll
Body: no aplica

Response: 


GET: Recupera una tarea por ID
http://localhost:5200/queryBiId
body JSON:
{
    "_id": "636d6fd271497f1f78ff2468"
}

Respesta:



POST: Crea una tarea
http://localhost:5200/new

Body JSON:

Response:

PUT: Actualiza una tarea por ID
http://localhost:5200/update
Body JSON:

Respuesta:

DELETE: Elimina una tarea por ID
http://localhost:5200/delete
Body JSON:

Respuesta:

