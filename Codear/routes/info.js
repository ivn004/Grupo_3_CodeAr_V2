var express = require('express'); // Requiere express.
var router = express.Router(); // Permite crear múltiples "mini aplicaciones".

//Rutas a los controladores
const{equipo,convertiteEnProfesor,empresa,nuestraHistoria,preguntas,profesores,terminosDeUso,testimonio}= require("../controllers/infoController");

//---RUTAS---// 
router.get("/equipo",equipo);
router.get("/empresa",empresa);
router.get("/nuestraHistoria",nuestraHistoria);
router.get("/profesores",profesores);
router.get("/convertiteEnProfesor",convertiteEnProfesor);
router.get("/preguntas",preguntas);
router.get("/testimonio",testimonio);
router.get("/terminosDeUso",terminosDeUso);

module.exports = router;