import { type SchemaTypeDefinition } from "sanity";
import {
  services,
  projects,
  experiences,
  expertises,
  about,
} from "@/../schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, projects, experiences, expertises, about],
};
