import express from "express";
import { getPlanets } from "../api.js";
import Moons from "../moons.json" assert {type: "json"};
const planets = await getPlanets();


const PORT = process.env.PORT || 3001;

const app = express();

  app.get("/moons", (req, res) => {
    res.json({Moons});
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
   