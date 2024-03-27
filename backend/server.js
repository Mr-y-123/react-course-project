import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
const app = express();
app.use(express.static("./public"));
app.get("/api/places", async (req, res) => {
  fs.readFile("./data/places.json", (err, data) => {
    if (err) throw err;
    const contentData = JSON.parse(data);
    res.send(contentData);
  });
});
const jsonParser = bodyParser.json();
app.get("/api/meals", async (req, res) => {
  fs.readFile("./data/MealsData.json", (err, data) => {
    if (err) throw new Error(err);
    const contentData = JSON.parse(data);
    res.send(contentData);
  });
});
app.post("/api/order", jsonParser, async (req, res) => {
  const orderData = req.body.order;
  if (!orderData) {
    return res.status(400).json({ message: "missing data" });
  }
  fs.writeFile("./data/order.json", JSON.stringify(orderData), (err, data) => {
    if (err) throw err;
    return res.status(200).json({ resData: data });
  });
});

app.listen("5000", console.log("server is started"));
