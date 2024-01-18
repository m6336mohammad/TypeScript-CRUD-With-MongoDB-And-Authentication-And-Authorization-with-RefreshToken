import mongoose from "mongoose";
const componentsSchema = new mongoose.Schema({
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

const ComponentsModel = mongoose.model("ComponentsModel", componentsSchema);
export default ComponentsModel;
