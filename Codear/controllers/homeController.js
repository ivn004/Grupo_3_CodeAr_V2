const db = require("../database/models");
const path = require("path");
const { getProducts, setProducts } = require(path.join(
  "..",
  "data",
  "products"
)); // Requiere la ruta del JSON parseado.
const products = getProducts();
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Formula para los puntos de los miles.

const homeController = {
  // Home
  home: (req, res) => {
    let html = db.Product.findAll({
      limit: 4,
    });

    let diseñoWeb = db.Category.findAll({
      limit: 4,
      where: {
        id: 1,
      },
      include: [
        {
          association: "Product",
        },
      ],
    });

    let javaScript = db.Category.findAll({
      limit: 4,
      where: {
        id: 2,
      },
      include: [
        {
          association: "Product",
        },
      ],
    });

    let videoJuegos = db.Category.findAll({
      limit: 4,
      where: {
        id: 3,
      },
      include: [
        {
          association: "Product",
        },
      ],
    });

    Promise.all([html, diseñoWeb, javaScript, videoJuegos]).then(
      ([html, diseñoWeb, javaScript, videoJuegos]) => {
        /* res.send(diseñoWeb); */
        res.render("index", {
          title: "HOME",
          html,
          diseñoWeb,
          javaScript,
          videoJuegos,
          toThousand,
        }); // Renderiza en la vista "index" y crea los nuevos arrays y metodos para usar.
      }
    );
  },
};

module.exports = homeController;
