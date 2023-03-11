import { CacheBookStrategy, SavedBook } from "./types";
import { BookImpl } from "../Book";
import { v5 } from "uuid";

export abstract class CacheBookStrategyABS implements CacheBookStrategy {
  protected static NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
  protected async getBookId(book: BookImpl): Promise<string> {
    const author = await book.getMetaField("creator");
    const title = await book.getMetaField("title");

    return v5(`${author}-${title}`, CacheBookStrategyABS.NAMESPACE);
  }

  protected async savedBookFactory(book: BookImpl): Promise<SavedBook> {
    const savedBook: Partial<SavedBook> = {};

    savedBook.id = await this.getBookId(book);

    savedBook.location = book.getLocation();
    savedBook.blob = book.getBuffer();
    savedBook.author = await book.getMetaField("creator");
    savedBook.description = await book.getMetaField("description");
    savedBook.title = await book.getMetaField("title");

    return savedBook as SavedBook;
  }

  abstract get(book: BookImpl): Promise<SavedBook>;

  abstract save(book: BookImpl): Promise<void>;

  abstract delete(book: BookImpl): Promise<void>;
  abstract delete(bookId: string): Promise<void>;
  abstract delete(book: BookImpl | string): Promise<void>;
}
