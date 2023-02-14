import * as EpubJS from "epubjs";
import { NavItem } from "epubjs/types/navigation";

export interface Book {
  render(selector: string): Promise<Book>;
  nextPage(): Book;
  prevPage(): Book;
  setPage(navItem: NavItem): Promise<Book>;
  getAnnotations(): Promise<EpubJS.NavItem[]>;

  getMetaField(field: string): Promise<string>;
}

export class BookImpl implements Book {
  private readonly bookInstance: EpubJS.Book;
  private rendition: EpubJS.Rendition;

  private displayed: boolean;

  constructor(blob: ArrayBuffer) {
    this.bookInstance = new EpubJS.Book(blob as unknown as string);
  }

  async render(selector: string): Promise<Book> {
    this.rendition = this.bookInstance.renderTo("book", {
      width: 900,
      height: "85vh",
    });


    await this.rendition.display();

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

  async getMetaField(field: string): Promise<string> {
    const metadata = await this.bookInstance.loaded.metadata;
    console.log(metadata);

    return metadata[field as keyof typeof metadata] ?? "";
  }
}
