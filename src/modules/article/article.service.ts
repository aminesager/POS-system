import { AppDataSource } from "../../main/db/dataSource";
import { Article } from "./article.entity";

export class ArticleService {
  private articleRepo = AppDataSource.getRepository(Article);

  async createArticle(
    name: string,
    price: number,
    category: string
  ): Promise<Article> {
    const article = this.articleRepo.create({ name, price, category });
    return await this.articleRepo.save(article);
  }

  async getAllArticles(): Promise<Article[]> {
    return await this.articleRepo.find();
  }

  async getArticleById(id: number): Promise<Article | null> {
    return await this.articleRepo.findOneBy({ id });
  }

  async updateArticle(
    id: number,
    data: Partial<Article>
  ): Promise<Article | null> {
    const article = await this.articleRepo.findOneBy({ id });
    if (!article) return null;
    Object.assign(article, data);
    return await this.articleRepo.save(article);
  }

  async deleteArticle(id: number): Promise<boolean> {
    const result = await this.articleRepo.delete(id);
    return result.affected !== 0;
  }
}
