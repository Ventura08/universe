import express from "express";
import Moons from "./models/database/moons.json" assert {type: "json"};
import { deleteMoon, createMoon, updateMoon } from "./controllers/moon.js";

const PORT = process.env.PORT || 3001;

const app = express();
  app.use(express.json());

  app.get("/moons", (req, res) => {
    res.json({Moons});
  });

  app.delete('/moon/:id/delete', (req, res) => {
    deleteMoon(req.params.item);
    res.send("deletado com sucesso! ");
  })

  app.post('/moon/create', (req, res) => {
    createMoon(req.body);
    res.send("AQUI VAI CRIAR");
  })

  app.put('/moon/:id', (req, res) => {
    //  console.log(req.params, req.body)
    updateMoon(req.body, req.params)
    res.send("Editado com sucesso");
  })
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
   