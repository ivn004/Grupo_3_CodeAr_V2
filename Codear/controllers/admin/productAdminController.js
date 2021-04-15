const db = require("../../database/models");

var path = require('path'); // Facilita el uso de rutas de archivos y directorios
const fs = require("fs")
// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Formula para los puntos de los miles.

//Productos
const { getProducts, setProducts } = require(path.join("..", "..", "data", "products")); // Requiere la ruta del JSON parseado.
const products = getProducts();

//Admin
const bcrypt = require("bcrypt");
const { getAdmins, setAdmins } = require("../../data/usuarios")
const usuarios = getAdmins();
const { validationResult } = require("express-validator");

//Controlador
const productAddController = {
    //ADMINISTRADOR
    index: (req, res) => {
        res.render(path.join("admin", "index"), {
            title: "Administración"
        })
    },

    //LISTADO DE CURSOS
    listCurso: (req, res) => {
        db.Product.findAll({
            include: [{
                association: 'categoria'
            }]
        })
            .then((products) => {
                res.render("admin/productList", {
                    title: "Cursos",
                    products
                });
            })
            .catch((error) => {
                res.send(error);
            });
    },

    //VENTAS
    ventas: (req, res) => {
        res.render("admin/productSale", {
            title: "Listado de Productos",
            products
        }); // Renderiza en la vista "productAll" y crea los nuevos arrays y metodos para usar.
    },

    //PÁGINA PARA CREAR PRODUCTO
    createCurso: (req, res) => {

        db.Teacher.findAll()
            .then((teachers) => {
                db.Category.findAll()
                    .then((categorias) => {
                        res.render("admin/productAdd", {
                            title: "Añadir Producto",
                            teachers,
                            categorias
                        });
                    })
                    .catch((error) => {
                        res.send(error);
                    });
            })
            .catch((error) => {
                res.send(error);
            });

    },

    //GUARDA EL NUEVO PRODUCTO
    storeCurso: (req, res, next) => {
        console.log(req.files)

        const { nombre, imagen, precio, descuento, categoryId, descripcion, resumen, publico, requisitos, lecciones, levelId, teacherId } = req.body;

        db.Product.create({
            nombre: nombre,
            imagen: req.files[0].filename,
            precio: precio,
            descuento: descuento,
            categoryId: categoryId,
            descripcion: descripcion,
            publico: publico,
            requisitos: requisitos,
            lecciones: lecciones,
            resumen: resumen,
            levelId: levelId,
            teacherId: teacherId,
        })
            .then((user) => {
                res.redirect("/admin/curso/list")
            })
            .catch((error) => {
                res.send(error);
            });
    },
    editCurso: (req, res) => {

        const { id } = req.params;

        db.Teacher.findAll()
            .then((teachers) => {
                db.Category.findAll()
                    .then((categorias) => {
                        db.Product.findOne({
                            where: {
                                id: id,
                            },
                        })
                            .then((product) => {
                                res.render("admin/productEdit", {
                                    title: "Editar Curso",
                                    teachers,
                                    categorias,
                                    product
                                });
                            })
                            .catch((error) => {
                                res.send(error);
                            });
                    })
                    .catch((error) => {
                        res.send(error);
                    });
            })
            .catch((error) => {
                res.send(error);
            });
    },
    updateCurso: (req, res, next) => {

        const { nombre, imagen, precio, descuento, categoryId, descripcion, resumen, publico, requisitos, lecciones, levelId, teacherId } = req.body;

        const { id } = req.params;

        db.Product.update(
            {
                nombre: nombre,
                imagen: req.files[0] ? req.files[0].filename : undefined,
                precio: precio,
                descuento: descuento,
                categoryId: categoryId,
                descripcion: descripcion,
                publico: publico,
                requisitos: requisitos,
                lecciones: lecciones,
                resumen: resumen,
                levelId: levelId,
                teacherId: teacherId,
            },
            {
                where: {
                    id: id,
                },
            }
        )
            .then(() => {
                res.redirect("/admin/curso/list");
            })

            .catch((error) => {
                res.send(error);
            });
    },
    deleteCurso: (req, res) => {

        const { id } = req.params;

        db.Product.findOne({
            where: {
                id: id,
            },
        })
            .then((product) => {
                if (product) {
                    if (fs.existsSync("/public/images/cursos", product.imagen)) {
                        fs.unlinkSync("/public/images/cursos", product.imagen)
                    }
                    db.Product.destroy({
                        where: {
                            id: id,
                        }
                    })
                        .then(() => {
                            res.redirect("/admin/curso/list");
                        })
                        .catch((error) => {
                            res.send(error);
                        });
                };
                res.redirect("/admin/curso/list");
            })
            .catch((error) => {
                res.send(error);
            });
    },

    // LISTA DE USUARIOS 
    usersList: (req, res) => {
        res.render("admin/usersList", {
            title: "Lista de usuarios",
            usuarios
        })
    },
    deleteUser: (req, res) => {
        const { id } = req.params;

        usuarios.forEach(user => {
            if (user.id === +id) {
                if (fs.existsSync(path.join("public", "images", "avatares", user.avatar))) {
                    fs.unlinkSync(path.join("public", "images", "avatares", user.avatar))
                }

                let eliminar = usuarios.indexOf(user);
                usuarios.splice(eliminar, 1)
            }
        });
        setAdmins(usuarios)
        res.redirect("/admin/curso/list");
    }
}

module.exports = productAddController;