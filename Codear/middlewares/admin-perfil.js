module.exports = (req, res, next) => {
  if (req.session.userAdmin && req.session.userAdmin.admin){
    next()
  } else {
    res.redirect("/users/perfil")
  }
}