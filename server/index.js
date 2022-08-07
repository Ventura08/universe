import express from "express";
import { getPlanets } from "../api.js";
import Moons from "./models/database/moons.json" assert {type: "json"};
import { deleteMoon } from "./controllers/moon.js";

const planets = await getPlanets();

const PORT = process.env.PORT || 3001;

const app = express();
  app.use(express.json());

  app.get("/moons", (req, res) => {
    req.header('User-Agent');
    res.json({Moons});
  });

  app.delete('/moon/:id/delete', (req, res) => {
    deleteMoon(req.params.id);
    res.send("deletado com sucesso! ");
  })

  app.post('/moon/create', (req, res) => {
    res.send("AQUI VAI CRIAR");
    req.body
  })

  app.put('/moon/:id', (req, res) => {
    res.send("AQUI VAI EDITAR");
  })
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
   