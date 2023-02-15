import { CacheBookStrategy, SavedBook } from "./types";
import { BookImpl } from "../Book";

export abstract class CacheBookStrategyABS implements CacheBookStrategy {
  protected async getBookId(book: BookImpl): Promise<string> {
    const author = await book.getMetaField("creator");
    const title = await book.getMetaField("title");

    return `${author}-${title}`;
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
}
