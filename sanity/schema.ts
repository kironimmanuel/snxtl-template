import { type SchemaTypeDefinition } from 'sanity';
import siteSettings from './schemas/siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
};
