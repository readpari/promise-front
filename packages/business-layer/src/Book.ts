import * as EpubJS from "epubjs";
import { NavItem } from "epubjs/types/navigation";
import { CacheBookStrategy, IndexedDBCacheStrategy } from "./cache";

export interface Book {
  render(selector: string): Promise<Book>;
  nextPage(): Book;
  prevPage(): Book;
  setPage(navItem: NavItem): Promise<Book>;
  getAnnotations(): Promise<EpubJS.NavItem[]>;
  getMetaField(field: string): Promise<string>;
  getLocation(): EpubJS.Location;

  getBuffer(): ArrayBuffer;
}

export class BookImpl implements Book {
  private readonly buffer: ArrayBuffer;
  private readonly bookInstance: EpubJS.Book;
  private readonly cacheStrategy: CacheBookStrategy =
    new IndexedDBCacheStrategy();
  private rendition: EpubJS.Rendition;

  private displayed: boolean;

  protected async onLocationChange() {
    await this.cacheStrategy.save(this);
  }

  constructor(blob: ArrayBuffer) {
    this.bookInstance = new EpubJS.Book(blob as unknown as string);
    this.buffer = blob;
  }

  async render(selector: string): Promise<Book> {
    this.rendition = this.bookInstance.renderTo("book", {
      width: 900,
      height: "85vh",
    });

    await this.rendition.display();

    // книга из кэша
    const cachedBook = await this.cacheStrategy.get(this);

    if (cachedBook) {
      await this.rendition.display(cachedBook.location.start.cfi);
    }

    this.rendition.on("locationChanged", this.onLocationChange.bind(this));

    this.displayed = true;

    return this;
  }

  nextPage(): Book {
    this.rendition.next();

    return this;
  }
  prevPage(): Book {
    this.rendition.prev();

    return this;
  }

  async getAnnotations(): Promise<EpubJS.NavItem[]> {
    await this.bookInstance.loaded.navigation;

    return this.bookInstance.navigation.toc;
  }

  async setPage(navItem: NavItem): Promise<Book> {
    await this.rendition.display(navItem.href);

    return this;
  }

  getLocation(): EpubJS.Location {
    return this.rendition.currentLocation() as unknown as EpubJS.Location;
  }

  async getMetaField(field: string): Promise<string> {
    const metadata = await this.bookInstance.loaded.metadata;

    return metadata[field as keyof typeof metadata] ?? "";
  }

  getBuffer(): ArrayBuffer {
    return this.buffer;
  }
}
