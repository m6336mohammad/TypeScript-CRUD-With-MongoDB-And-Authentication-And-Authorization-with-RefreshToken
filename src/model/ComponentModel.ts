import mongoose from "mongoose";
const componentSchema = new mongoose.Schema({
  title: String,
  topic: String,
  subscriber: String,
  publisher: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
  },
  broker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BrokerModel',
  },
});

const ComponentModel = mongoose.model("ComponentModel", componentSchema);
export default ComponentModel;
