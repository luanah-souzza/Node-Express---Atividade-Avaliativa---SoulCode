const express = require("express");
const usuarios= require(".routes/usuarios");


const app = express();
app.use(express.json());

app.use("/usuarios", usuarios);


app.listen(300);