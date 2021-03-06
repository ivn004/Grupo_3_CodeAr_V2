//Base de datos de usuarios
const db = require("../../database/models");
const { getAdmins, setAdmins } = require("../../data/usuarios");
const usuarios = getAdmins();

const bcrypt = require("bcrypt");

//validacion
const { validationResult } = require("express-validator");

const productAddController = {
  // REGISTER
  register: (req, res) => {
    res.render("admin/register", {
      title: "Registro",
    });
  },

  //REGISTER PROCESS
  processRegister: (req, res) => {
    let errores = validationResult(req); 
    if (!errores.isEmpty()) {
      //si no está vacio
      return res.render("admin/register", {
        //renderisa register pasandole los errores
        errores: errores.errors,
        title: "Registro",
      });
    }

    let { nombreUsuario, pass, email } = req.body; 

    let passHash = bcrypt.hashSync(pass.trim(), 12); //Hasheamos la contraseña

    db.Usuarios.create({
      nombre: nombreUsuario,
      email: email,
      password: passHash,
      avatar: req.files[0] ? req.files[0].filename : "default.png",
    })
      .then((user) => {
        res.redirect("/users/login");
      })
      .catch((error) => {
        res.send(error);
      });
  
  },

  // LOGIN
  login: (req, res) => {
    res.render("admin/login", {
      title: "Login",
    });
  },
  processLogin: (req, res) => {
    let errores = validationResult(req);

    const { email, pass } = req.body;

    if (!errores.isEmpty()) {
      console.log(errores);
      res.render("admin/login", {
        errores: errores.errors,
        title: "Login",
      });
    } else {
      db.Usuarios.findOne({
        where: {
          email: email,
        },
      })
        .then((user) => {
          if (user) {
            if (bcrypt.compareSync(pass.trim(), user.password)) {
              console.log(user);
              req.session.userAdmin = {
                id: user.id,
                nombreUsuario: user.nombre,
                email: user.email,
                telefonoPerfil: user.telefono,
                avatar: user.avatar,
                admin: user.admin,
              };

              // res.redirect("/users/perfil")
              res.redirect("/admin");
            }
          }
          res.render("admin/login", {
            errores: [
              {
                msg: "credenciales invalidas",
              },
            ],
          });
        })
        .catch((error) => {
          res.send(error);
        });
    }
  },

  // EDITAR CARACTERISTICAS
  editPerfil: (req, res) => {
    const { id } = req.session.userAdmin;
    db.Usuarios.findOne({
      where: {
        id: id,
      },
    })
      .then((usuario) => {
        res.render("admin/users/perfilEdit", {
          usuario,
          title: "Editar Perfil",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  updatePerfil: (req, res, next) => {
    const { nombreUsuario, email, telefonoPerfil } = req.body;

    /* let passHash = bcrypt.hashSync(pass.trim(), 12); */

    const { id } = req.session.userAdmin;

    db.Usuarios.update(
      {
        nombre: nombreUsuario,
        email: email,
        telefono: telefonoPerfil,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then(() => {
        res.redirect("/users/perfil");
      })

      .catch((error) => {
        res.send(error);
      });
  },

  //CERRAR SESION
  logout: (req, res) => {
    delete req.session.userAdmin;
    res.redirect("/");
  },

  //Perfil de usuario

  perfil: (req, res) => {
    const { id } = req.session.userAdmin;
    db.Usuarios.findOne({
      where: {
        id: id,
      },
    })
    .then((usuario)=>{
      res.render('admin/users/perfil',{title : 'miPerfil',usuario})
    }
    )
  },
};

module.exports = productAddController;
