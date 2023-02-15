import { BookImpl } from "../Book";
import { CacheBookStrategy, SavedBook } from "./types";
import { CacheBookStrategyABS } from "./CacheBookStrategyABS";

export class IndexedDBCacheStrategy
  extends CacheBookStrategyABS
  implements CacheBookStrategy
{
  get(book: BookImpl): Promise<SavedBook> {
    throw new Error("Not implemented!");
  }

  save(book: BookImpl): Promise<void> {
    throw new Error("Not implemented!");
  }
}
