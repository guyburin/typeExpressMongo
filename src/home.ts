import { Schema, model, connect } from "mongoose";

const uri: string = "mongodb://localhost:27017/home";

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connection Success to MongoDB!!");
  }
});

export const HomeSchema = new Schema({
  home: { type: String, required: true },
  volumn: { type: String, required: true },
});

const Home = model("Home", HomeSchema);
export default Home;
