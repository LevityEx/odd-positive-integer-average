import request from "supertest";
import { initExpressApp } from "../src/app";

describe("integration", () => {
  const app = request(initExpressApp());
  test("input", async () => {
    await app
      .post("/odd-positive-average")
      .set("Content-Type", "application/json")
      .send({ input: [1, 2, 3] })
      .expect(200, { average: 2 });
  });
});
