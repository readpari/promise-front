import { CacheBookStrategy, SavedBook } from "./types";
import { BookImpl } from "../Book";

export abstract class CacheBookStrategyABS implements CacheBookStrategy {
  protected async getBookId(book: BookImpl): Promise<string> {
    const author = await book.getMetaField("author");
    const title = await book.getMetaField("title");

    return `${author}-${title}`;
  }

  abstract get(book: BookImpl): Promise<SavedBook>;

  abstract save(book: BookImpl): Promise<void>;
}
