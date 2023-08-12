import {type SchemaTypeDefinition} from 'sanity'
import blogPost from './documents/blog-post'
import siteSettings from './documents/site-settings'
import portableText from './objects/portable-text'
import seo from './objects/seo'

export const schemaTypes: SchemaTypeDefinition[] = [siteSettings, seo, blogPost, portableText]
