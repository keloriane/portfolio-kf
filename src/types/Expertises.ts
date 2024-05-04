import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ExpertiseItem {
  title?: string;
  src?: string | StaticImport;
  technologies?: string;
}
