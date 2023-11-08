//orm de perfil
const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const ProyectoSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { collection: "proyecto" }
);
ProyectoSchema.plugin(mongoosePaginate);
module.exports = model("Proyecto", ProyectoSchema, "proyecto");
