import * as EpubJS from "epubjs";
import { BookImpl } from "../Book";

export interface SavedBook {
  id: string;
  location?: EpubJS.Location;

  blob: ArrayBuffer;
}

export interface CacheBookStrategy {
  save(book: BookImpl): Promise<void>;
  get(book: BookImpl): Promise<SavedBook>;
}
