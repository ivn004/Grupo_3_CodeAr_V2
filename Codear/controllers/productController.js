const { Op } = require("sequelize");
const db = require("../database/models");
const path = require("path");
const { sequelize } = require("../database/models");
const { getProducts, setProducts } = require(path.join(
  "..",
  "data",
  "products"
)); // Requiere la ruta del JSON parseado.
const products = getProducts();
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Formula para los puntos de los miles.

const productController = {
  //DETALLE
  detail: (req, res) => {
    const { id } = req.params;
    db.Product.findOne({
      where: {
        id: id,
      },
      include: [
        {
          association: "profesor",
        },
        {
          association: "nivel",
        },
      ],
    }).then((resultado) => {
      /* return res.send(resultado) */
      res.render("productDetail", {
        title: "detalle",
        resultado,
        id,
      });
    });
  },

  //BUSCADOR
  search: (req, res) => {
    const buscar = req.query.search;

    db.Product.findAll({
      where: {
        nombre: { [Op.like]: `%${buscar}%` },
      },
      include: [
        {
          association: "profesor",
        },
        {
          association: "nivel",
        },
      ],
    }).then(function (products) {
      res.render("resultados", {
        title: "Resultado de la búsqueda",
        products,
        toThousand,
      });
    });
  },

  //--------------CARRITO-----------------//
  //--------------------------------------//
  //--------------CARRITO-----------------//

  carrito: (req, res) => {
    db.Product.findAll({
      include: [
        {
          association: "profesor",
        },
        {
          association: "nivel",
        },
      ],
    }).then(function (products) {
      res.render("carritoViews/productCar", {
        title: "Cursos",
        products,
        toThousand,
      });
    });
    // Renderiza en la vista "ProductCar" y crea los nuevos arrays y metodos para usar.
  },

  categorias: (req, res) => {
    const { id } = req.params;
    db.Product.findAll({
      where: {
        categoryId: id,
      },
      include: [
        {
          association: "profesor",
        },
        {
          association: "nivel",
        },
      ],
    }).then(function (products) {
      db.Category.findByPk(id).then((categoria) => {
        res.render("carritoViews/productCar", {
          title: categoria.nombre,
          products,
          toThousand,
        });
      });
    });
  },
};

module.exports = productController;
