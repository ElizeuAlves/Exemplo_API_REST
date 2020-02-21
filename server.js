const express = require('express');
const app = express()
const data = require("./data.json")

app.use(express.json())

// Resource é um objeto/entidade

// GET: Recebe dados de um Resource
// POST: Enviar dados ou informações para serem processadas por um Resource
// PUT: Atualizar dados de um Resource
// DELETE: Deletar um Resource

app.get("/clients", function(req, res){
    res.json(data)
})
app.get("/clients/:id")
app.post("/clients")
app.put("/clients/:id")
app.delete("/clients/:id")

app.listen(3000, function(){
    console.log("Server is running")
})