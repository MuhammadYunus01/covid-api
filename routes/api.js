// TODO 2: SETUP ROUTING (ROUTER)
const express = require("express");
const router = express.Router();
const CovidController = require("../controllers/CovidController");

router.get("/patients", CovidController.index);

router.get("/patients/:id", CovidController.show);

router.post("/patients", CovidController.store);

router.put("/patients/:id", CovidController.update);

router.delete("/patients/:id", CovidController.destroy);

router.get("/patients/search/:name", CovidController.search);

router.get("/patients/status/positive", CovidController.positive);

router.get("/patients/status/recovered", CovidController.recovered);

router.get("/patients/status/dead", CovidController.dead);



module.exports = router;
