import "reflect-metadata";
import { DataSource } from "typeorm";
import { Article } from "../../modules/article/article.entity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true, // auto create/update tables - disable in prod
  logging: false,
  entities: [Article],
  migrations: [],
  subscribers: [],
});

export const initializeDataSource = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Data Source has been initialized!");
  } catch (error) {
    console.error("❌ Error during Data Source initialization:", error);
  }
};
