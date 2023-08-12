import {GiSettingsKnobs} from 'react-icons/gi'
import {StructureBuilder} from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(GiSettingsKnobs)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')
        ),
      ...(S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return id !== undefined && !['siteSettings'].includes(id)
      }) as any),
    ])
