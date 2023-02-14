import * as EpubJS from "epubjs";
import { LocalStorageSingleton, Storage } from "./LocalStorageWrapper";
import { BookImpl } from "./Book";

export interface SavedBook {
  id: string;
  location?: EpubJS.Location;
}
export interface CacheBookStrategy {
  save(book: BookImpl): Promise<void>;
  get(book: BookImpl): Promise<SavedBook>;
}

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
