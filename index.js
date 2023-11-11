var express = require("express");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  console.log("Requisicao GET recebida para porta URI /");
  res.send("Oi Aliny, saudades de você, quando você vai me dar um abraço!?! (/) !");
});

app.post("/adicionar", function (req, res) {
  console.log("Requisicao POST recebida para a porta URI /adicionar");
  res.send("Seja bem-vindo à rota de adicionar (/adicionar) !");
});

app.put("/atualizar", function (req, res) {
  console.log("Requisicao PUT recebida para a porta URI /atualizar");
  res.send("Seja bem-vindo à rota de atualizar (/atualizar) !");
});

app.delete("/deletar", function (req, res) {
  console.log("Requisicao DELETE rcebida para a porta UIR/ deletar");
  res.send("Seja bem-vindo à rota de deletar (/deletar)!");
});

app.get("/listar", function (req, res) {
  console.log("Requisicao GET recebida para a rota URI /listar");
  res.send("Seja bem-vindo à rota de listagem (/listar)!");
});  

//A porta é uma variável de ambiente
const porta = process.env.PORT || 8080;
app.listen(porta, () =>
  console.log("Servidor inicializado na porta: " + porta)
);

