import { LocalStorageSingleton, Storage } from "../LocalStorageWrapper";
import { BookImpl } from "../Book";
import { CacheBookStrategy, SavedBook } from "./types";

export class LocalStorageCache implements CacheBookStrategy {
  private readonly __localstorage: Storage = new LocalStorageSingleton();

  protected async getBookId(book: BookImpl): Promise<string> {
    const author = await book.getMetaField("author");
    const title = await book.getMetaField("title");

    return `${author}-${title}`;
  }
  async save(book: BookImpl): Promise<void> {
    const savedBook: Partial<SavedBook> = {};

    savedBook.id = await this.getBookId(book);
    savedBook.location = book.getLocation();

    this.__localstorage.set<SavedBook>(savedBook.id, savedBook as SavedBook);
  }

  async get(book: BookImpl): Promise<SavedBook> {
    const id = await this.getBookId(book);

    return this.__localstorage.get<SavedBook>(id);
  }
}
