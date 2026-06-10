const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".ogv", ".mov", ".m4v"];
const IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
];
const PDF_EXTENSIONS = [".pdf"];

function getPathname(url: string): string {
  return url.split("?")[0].toLowerCase();
}

export function isVideoUrl(url: string): boolean {
  const path = getPathname(url);
  return VIDEO_EXTENSIONS.some((ext) => path.endsWith(ext));
}

export function isImageUrl(url: string): boolean {
  const path = getPathname(url);
  return IMAGE_EXTENSIONS.some((ext) => path.endsWith(ext));
}

export function isPdfUrl(url: string): boolean {
  const path = getPathname(url);
  return PDF_EXTENSIONS.some((ext) => path.endsWith(ext));
}
