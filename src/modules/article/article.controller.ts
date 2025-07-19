import { Router, Request, Response } from "express";
import { ArticleService } from "./article.service";

const router = Router();
const articleService = new ArticleService();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, price, category } = req.body;
    const newArticle = await articleService.createArticle(
      name,
      price,
      category
    );
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ error: "Failed to create article" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  const articles = await articleService.getAllArticles();
  res.json(articles);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const article = await articleService.getArticleById(id);
  if (!article) return res.status(404).json({ message: "Article not found" });
  res.json(article);
});

router.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updated = await articleService.updateArticle(id, req.body);
  if (!updated) return res.status(404).json({ message: "Article not found" });
  res.json(updated);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deleted = await articleService.deleteArticle(id);
  if (!deleted) return res.status(404).json({ message: "Article not found" });
  res.status(204).send();
});

export default router;
