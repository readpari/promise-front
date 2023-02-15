import * as idb from "idb";
import { BookImpl } from "../Book";
import { CacheBookStrategy, SavedBook, SavedBookInfo } from "./types";
import { CacheBookStrategyABS } from "./CacheBookStrategyABS";

/**
 * Do not await other things between the start and end of your transaction, otherwise the transaction will close before you're done.
 * https://github.com/jakearchibald/idb#transaction-lifetime
 */
export class IndexedDBCacheStrategy
  extends CacheBookStrategyABS
  implements CacheBookStrategy
{
  public static async getAllSavedBooks(): Promise<SavedBookInfo[]> {
    const db = await IndexedDBCacheStrategy.dbFactory();

    const savedBooks: SavedBook[] = await db.getAll(
      IndexedDBCacheStrategy.STORE_NAME
    );

    return savedBooks.map((savedBook) => ({
      author: savedBook.author,
      description: savedBook.description,
      id: savedBook.id,
      location: savedBook.location,
      title: savedBook.title,
    }));
  }
  protected static DB_NAME = "Promise";
  protected static STORE_NAME = "Cached_Books";

  protected static readonly IDB_VERSION = 3;
  protected static readonly openIDBCallbacks: idb.OpenDBCallbacks<SavedBook> = {
    upgrade(db) {
      db.createObjectStore(IndexedDBCacheStrategy.STORE_NAME);
    },
  };

  protected static async dbFactory(): Promise<idb.IDBPDatabase<SavedBook>> {
    return await idb.openDB<SavedBook>(
      IndexedDBCacheStrategy.DB_NAME,
      IndexedDBCacheStrategy.IDB_VERSION,
      IndexedDBCacheStrategy.openIDBCallbacks
    );
  }

  async get(book: BookImpl): Promise<SavedBook> {
    const bookKey = await this.getBookId(book);

    const db = await IndexedDBCacheStrategy.dbFactory();

    return await db.get(IndexedDBCacheStrategy.STORE_NAME, bookKey);
  }

  async save(book: BookImpl): Promise<void> {
    const savedBook = await this.savedBookFactory(book);

    const db = await IndexedDBCacheStrategy.dbFactory();

    await db.put(IndexedDBCacheStrategy.STORE_NAME, savedBook, savedBook.id);
  }
}
