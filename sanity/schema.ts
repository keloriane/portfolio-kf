import { type SchemaTypeDefinition } from 'sanity'
import { services } from '@/../schemas/services'
import { projects } from '../schemas/project'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, projects],
}
