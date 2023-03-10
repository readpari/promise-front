import * as EpubJS from "epubjs";
import { BookImpl } from "../Book";

export interface SavedBook {
  id: string;
  location?: EpubJS.Location;
  blob: ArrayBuffer;
  author?: string;
  title?: string;
  description?: string;
}

export type SavedBookInfo = SavedBook;

export interface CacheBookStrategy {
  save(book: BookImpl): Promise<void>;
  get(book: BookImpl): Promise<SavedBook>;
  delete(book: BookImpl): Promise<void>;
  delete(bookId: string): Promise<void>;
}
