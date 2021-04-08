var express = require('express'); // Requiere express.
var router = express.Router(); // Permite crear múltiples "mini aplicaciones".
const path = require("path");

// Rutas a los controladores.
const {detail, carrito, search,categorias} = require(path.join("..","controllers","productController"));

//SEARCH
router.get("/search",search)

/* GET Página DETALLE DEL PRODUCTO */
router.get('/detail/:id', detail)

/* GET Página CARRITO */
router.get("/carrito",carrito)
//CATEGORIAS

router.get('/categoria/:id',categorias)


module.exports = router;