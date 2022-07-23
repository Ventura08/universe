import express from "express";
import { getPlanets } from "../api.js";
const planets = await getPlanets();


const PORT = process.env.PORT || 3001;

const app = express();

  app.get("/api-planets", (req, res) => {
    // res = await fetch("https://api.le-systeme-solaire.net/rest/bodies");
    // console.log(res.json())
    res.json({data: planets});
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
   