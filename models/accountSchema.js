const { model, Schema } = require("mongoose");

const accountSchema = new Schema({
  username: { type: String },
  funds: { type: Number },
});

module.exports = model("account", accountSchema);
