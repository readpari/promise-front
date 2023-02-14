import * as EpubJS from "epubjs";

export type CurrentLocation = Awaited<
  ReturnType<typeof EpubJS.Rendition.prototype.currentLocation>
>;
