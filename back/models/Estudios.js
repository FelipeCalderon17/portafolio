//orm de perfil
const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const EstudioSchema = Schema(
  {
    tipo: {
      type: String,
      required: true,
    },
    detalle: {
      type: String,
      required: true,
    },
    fechaFin: {
      type: Date,
    },
    notas: {
      type: String,
      required: true,
    },
  },
  { collection: "estudio" }
);
EstudioSchema.plugin(mongoosePaginate);
module.exports = model("Estudio", EstudioSchema, "estudio");
