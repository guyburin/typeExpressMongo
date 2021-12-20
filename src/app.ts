import express from "express";
import * as bodyParesr from "body-parser";
import * as homeController from "./controllers/homeController";

// Our Express APP config
const app = express();
app.set("port", 3000);
app.use(bodyParesr.json());

// API Endpoints
app.get("/homes", homeController.allHome);
app.get("/home/:id", homeController.getHome);
app.put("/home", homeController.addHome);
app.delete("/home/:id", homeController.delHome);
app.post("/home/:id", homeController.updateHome);

app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});
