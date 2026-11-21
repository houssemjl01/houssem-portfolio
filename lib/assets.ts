import fs from "node:fs";
import path from "node:path";

import type { ProjectScreenshot } from "@/types/content";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_PATTERN = /\.(png|jpe?g|webp|avif)$/i;

export function publicFileExists(relativePath: string): boolean {
  try {
    return fs.existsSync(path.join(PUBLIC_DIR, relativePath));
  } catch {
    return false;
  }
}

export function isCvAvailable(): boolean {
  return publicFileExists("cv/houssem-jlassi-cv.pdf");
}

/**
 * Screenshots are picked up automatically from `public/projects/<slug>/`.
 * Drop in PNG, JPG, WebP, or AVIF files and they appear in the case study.
 */
export function getProjectScreenshots(slug: string): ProjectScreenshot[] {
  const directory = path.join(PUBLIC_DIR, "projects", slug);

  try {
    if (!fs.existsSync(directory)) return [];

    return fs
      .readdirSync(directory)
      .filter((file) => IMAGE_PATTERN.test(file))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => {
        const label = file
          .replace(IMAGE_PATTERN, "")
          .replace(/[-_]+/g, " ")
          .trim();

        return {
          src: `/projects/${slug}/${file}`,
          alt: `Email Templates Management Platform interface${label ? ` — ${label}` : ""}`,
        };
      });
  } catch {
    return [];
  }
}
