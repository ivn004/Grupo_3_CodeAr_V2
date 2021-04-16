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

    let diseñoWeb = db.Category.findOne({
      limit: 4,
      where: {
        id: 6,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });

    let javaScript = db.Category.findOne({
      limit: 4,
      where: {
        id: 2,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });

    let videoJuegos = db.Category.findOne({
      limit: 4,
      where: {
        id: 3,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });
    let marketing = db.Category.findAll({
      limit: 4,
      where: {
        id: 4,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });
    let negocios = db.Category.findAll({
      limit: 4,
      where: {
        id: 5,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });
    let php = db.Category.findAll({
      limit: 4,
      where: {
        id: 7,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });
    let tipografia = db.Category.findAll({
      limit: 4,
      where: {
        id: 8,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });
    let wordpress = db.Category.findAll({
      limit: 4,
      where: {
        id: 9,
      },
      include: [
        {
          association: "cursos",
        },
      ],
    });
    Promise.all([html, diseñoWeb, javaScript, videoJuegos,marketing,negocios,php,tipografia,wordpress]).then(
      ([html, diseñoWeb, javaScript, videoJuegos,marketing,negocios,php,tipografia,wordpress]) => {
        // return res.send(diseñoWeb);
        res.render("index", {
          title: "HOME",
          html,
          diseñoWeb,
          javaScript,
          videoJuegos,
          // marketing,
          // negocios,
          // php,
          // tipografia,
          // wordpress,
          toThousand,
        }); // Renderiza en la vista "index" y crea los nuevos arrays y metodos para usar.
      }
    );
  },
};

module.exports = homeController;
