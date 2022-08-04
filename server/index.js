import express from "express";
import { getPlanets } from "../api.js";
import Moons from "../moons.json" assert {type: "json"};
const planets = await getPlanets();


const PORT = process.env.PORT || 3001;

const app = express();

  app.get("/moons", (req, res) => {
    res.json({Moons});
  });

  app.delete('/moon/:id/delete', (req, res) => {
    res.send("AQUI VAI DELETEAR");
  })

  app.post('/moon/create', (req, res) => {
    res.send("AQUI VAI CRIAR");
  })

  app.put('/moon/:id', (req, res) => {
    res.send("AQUI VAI EDITAR");
  })
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
   