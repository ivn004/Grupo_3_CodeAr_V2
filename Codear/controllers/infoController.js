module.exports = {
  equipo:(req,res)=>{
    res.render("equipo",{
      title:"Nuestro Equipo"
    })
  },
  empresa: (req, res) => {
    res.render("empresa", {
      title: "La Empresa"
    })
  },
  nuestraHistoria: (req, res) => {
    res.render("nuestraHistoria", {
      title: "Nuestra Historia"
    })
  },
  profesores: (req, res) => {
    res.render("profesores", {
      title: "Nuestros Profesores"
    })
  },
  convertiteEnProfesor: (req, res) => {
    res.render("convertiteEnProfesor", {
      title: "Convertite en Profesor"
    })
  },
  preguntas: (req, res) => {
    res.render("preguntas", {
      title: "Preguntas"
    })
  },
  testimonio: (req, res) => {
    res.render("testimonio", {
      title: "Testimonio"
    })
  },
  terminosDeUso: (req, res) => {
    res.render("terminosDeUso", {
      title: "Terminos de Uso"
    })
  }
};