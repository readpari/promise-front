import * as idb from "idb";
import { BookImpl } from "../Book";
import { CacheBookStrategy, SavedBook } from "./types";
import { CacheBookStrategyABS } from "./CacheBookStrategyABS";

/**
 * Do not await other things between the start and end of your transaction, otherwise the transaction will close before you're done.
 * https://github.com/jakearchibald/idb#transaction-lifetime
 */
export class IndexedDBCacheStrategy
  extends CacheBookStrategyABS
  implements CacheBookStrategy
{
  protected static DB_NAME = "Promise";
  protected static STORE_NAME = "Cached_Books";

  protected static readonly IDB_VERSION = 3;
  protected static readonly openIDBCallbacks: idb.OpenDBCallbacks<SavedBook> = {
    upgrade(db) {
      db.createObjectStore(IndexedDBCacheStrategy.STORE_NAME);
    },
  };

  async get(book: BookImpl): Promise<SavedBook> {
    const bookKey = await this.getBookId(book);

    const db = await idb.openDB<SavedBook>(
      IndexedDBCacheStrategy.DB_NAME,
      IndexedDBCacheStrategy.IDB_VERSION,
      IndexedDBCacheStrategy.openIDBCallbacks
    );

    return await db.get(IndexedDBCacheStrategy.STORE_NAME, bookKey);
  }

  async save(book: BookImpl): Promise<void> {
    const savedBook = await this.savedBookFactory(book);

    const db = await idb.openDB<SavedBook>(
      IndexedDBCacheStrategy.DB_NAME,
      IndexedDBCacheStrategy.IDB_VERSION,
      IndexedDBCacheStrategy.openIDBCallbacks
    );

    await db.put(IndexedDBCacheStrategy.STORE_NAME, savedBook, savedBook.id);
  }
}
