//orm de perfil
const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const PersonaSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    fechaNace: {
      type: Date,
    },
  },
  { collection: "persona" }
);
PersonaSchema.plugin(mongoosePaginate);
module.exports = model("Persona", PersonaSchema, "persona");
