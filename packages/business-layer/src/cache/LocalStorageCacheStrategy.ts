import { LocalStorageSingleton, Storage } from "../LocalStorageWrapper";
import { BookImpl } from "../Book";
import { CacheBookStrategy, SavedBook } from "./types";
import { CacheBookStrategyABS } from "./CacheBookStrategyABS";

export class LocalStorageCache
  extends CacheBookStrategyABS
  implements CacheBookStrategy
{
  private readonly __localstorage: Storage = new LocalStorageSingleton();

  async save(book: BookImpl): Promise<void> {
    const savedBook = await this.savedBookFactory(book);

    this.__localstorage.set<SavedBook>(savedBook.id, savedBook as SavedBook);
  }

  async get(book: BookImpl): Promise<SavedBook> {
    const id = await this.getBookId(book);

    return this.__localstorage.get<SavedBook>(id);
  }
}
