import express from "express";
import { initializeDataSource } from "./main/db/dataSource";
import articleRouter from "./modules/article/article.controller";

const app = express();
app.use(express.json());

app.use("/articles", articleRouter);

initializeDataSource().then(() => {
  app.listen(3000, () =>
    console.log("Server running on http://localhost:3000")
  );
});
