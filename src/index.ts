/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */
import { initExpressApp } from "./app";

const app = initExpressApp();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
