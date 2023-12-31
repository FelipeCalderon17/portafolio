let Persona = require("../models/Persona");
let bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registrar = async (req, res) => {
  try {
    let datos = req.body;
    //validar los datos

    //crear el objeto
    const personaGuardar = new Persona(datos);
    //control de usuarios duplicados

    let consulta = await Persona.find({
      $or: [
        {
          email: personaGuardar.email.toLowerCase(),
        },
      ],
    }).exec();
    // encriptar y salvar
    if (consulta.length > 0) {
      return res.status(400).json({
        mensaje: "ya existe el email",
      });
    } else {
      //encriptar y salvar
      let password = await bcrypt.hash(personaGuardar.password, 10);
      personaGuardar.password = password;
      personaGuardar.save();
      return res.status(200).json({
        mensaje: "Insertado con exito",
      });
    }
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};

const login = async (req, res) => {
  //datos de la peticion (body)
  let data = req.body;

  //validamos que la data esté completa
  if (!data.email || !data.password) {
    res.status(400).send({
      resultado: "error",
      mensaje: "faltan datos por enviar del formulario ! ",
    });
  }

  // buscar en la bd el usuario  y validar

  let consulta = await Persona.findOne({ email: data.email }).exec();
  if (consulta == null) {
    return res.status(400).send({
      resultado: "error",
      mensaje: "Usuario no existe en la BD",
      consulta,
    });
  } else {
    let pwd = bcrypt.compareSync(data.password, consulta.password);
    if (!pwd) {
      return res.status(400).send({
        resultado: "error",
        mensaje: "Password Erronea !",
      });
    }
  }

  //generamos el token  --- sencillo

  const token = jwt.sign(
    {
      userId: consulta._id,
      email: consulta.email,
    },
    "SeCrEtO",
    {
      expiresIn: "1d",
    }
  );

  //resultado final del método
  return res.status(200).send({
    resultado: "success",
    mensaje: " Ingreso exitoso !",
    user: {
      id: consulta._id,
      email: consulta.email,
      token: token,
    },
  });
};
const listar = async (req, res) => {
  try {
    let limite = req.params.limite;
    let consulta = await Persona.find({}).sort({ _id: -1 }).limit(limite).exec();
    return res.status(200).send({
      longitud_resultado: consulta.length,
      resultado: consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
const listarUno = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    consulta = await Persona.findById(id).exec();
    return res.status(200).send({
      resultado: consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
const borrarUno = async (req, res) => {
  try {
    //obtener el id
    let id = req.params.id;
    consulta = await Persona.findOneAndDelete(id).exec();
    return res.status(200).send({
      resultado: "success",
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la consulta : " + error.message,
    });
  }
};
const editar = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;

    let consulta = await Persona.findOneAndUpdate({ _id: id }, data).exec();
    return res.status(200).send({
      resultado: "success",
      consulta,
    });
  } catch (error) {
    return res.status(404).send({
      nombreError: error.name,
      Mensaje: "Error en la actualizacion : " + error.message,
    });
  }
};
module.exports = {
  registrar,
  login,
  listar,
  listarUno,
  borrarUno,
  editar,
};
