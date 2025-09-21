import type { CollectionConfig } from 'payload'

export const Aboutus: CollectionConfig = {
  slug: 'aboutus',
  labels: {
    singular: 'AboutUs',
    plural: 'AboutUs',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // allow public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        {
          slug: 'textBlock',
          fields: [
            {
              name: 'content',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          slug: 'imageBlock',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    }
  ],
}
export default Aboutus