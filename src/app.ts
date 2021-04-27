import express from "express";
import { averageOddPositiveIntegers, isAllIntegers } from "./util";

export function initExpressApp(): express.Express {
  const app = express();

  app.use(express.json());

  app.post("/odd-positive-average", (req, res, next) => {
    let { input } = req.body;
    if (input && input.length < 1) {
      res.status(400).json({ message: "Must contain inputs" });
      return;
    }
    if (!isAllIntegers(input)) {
      res.status(400).json({ message: "Non integer detected in array." });
      return;
    }

    const result = averageOddPositiveIntegers(input); // returns number
    res.status(200).json({ average: result });
  });

  return app;
}
