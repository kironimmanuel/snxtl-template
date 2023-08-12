/**
 * This configuration is used to for the Sanity Studio
 */
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {deskTool} from 'sanity/desk'
import {Logo} from './components/branding/Logo'
import {deskStructure} from './desk-structure'
import {dataset, projectId} from './environment'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'SNXTL Studio',
  projectId,
  dataset,
  plugins: [
    /**
     * @description
     * Desk structure allows you to customize you studio desk layout
     */
    deskTool({structure: deskStructure}),
    /**
     * @description
     * Media plugin adds a new tab to the desk where you can manage your assets
     * https://www.sanity.io/plugins/sanity-plugin-media
     */
    media(),
    /**
     * @description
     * Vision is a tool that lets you query your content with GROQ in the studio
     * https://www.sanity.io/docs/the-vision-plugin
     */
    visionTool(),
  ],
  // Add and edit the content schema in the './schema' folder
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'siteSettings')
      }
      return prev
    },
    actions: (prev, {schemaType}) => {
      if (schemaType === 'siteSettings') {
        return prev.filter(
          ({action}: any) => !['unpublish', 'delete', 'duplicate'].includes(action)
        )
      }
      return prev
    },
  },
})
