/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */
import express from "express";
import { averageOddPositiveIntegers, isAllIntegers } from "./util";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/odd-positive-average", (req, res, next) => {
  let { input } = req.body;
  if (input.length < 1) {
    res.status(400).json({ message: "Must contain inputs" });
    return;
  }
  if (!isAllIntegers(input)) {
    res.status(400).json({ message: "Non integer detected in array." });
    return;
  }

  let result = averageOddPositiveIntegers(input);
  res.status(200).json({ average: result.toFixed() });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
