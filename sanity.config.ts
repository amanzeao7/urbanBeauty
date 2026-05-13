import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'urban-beauty',
  title: 'Urban Beauty Studio',

projectId: '9vudhwbk',
dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton — Site Settings appears as a single item not a list
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('pricing').title('Pricing'),
            S.documentTypeListItem('teamMember').title('Team'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
    visionTool(), // lets you test GROQ queries in the studio
  ],

  schema: {
    types: schemaTypes,
  },
})
