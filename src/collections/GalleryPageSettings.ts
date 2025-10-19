import type { CollectionConfig } from 'payload'

export const GalleryPageSettings: CollectionConfig = {
  slug: 'gallery-page-settings',
  admin: {
    useAsTitle: 'pageTitle',
    description: 'Manage copy for the gallery landing page.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
      defaultValue: 'Gallery',
      admin: {
        description: 'Hero title displayed on the gallery page.',
      },
    },
    {
      name: 'pageDescription',
      type: 'richText',
      required: false,
      admin: {
        description: 'Optional rich text intro beneath the header.',
      },
    },
    {
      name: 'loadMoreText',
      type: 'text',
      required: false,
      defaultValue: 'Load more',
      admin: {
        description: 'CTA label for expanding gallery items.',
      },
    },
    {
      name: 'loadLessText',
      type: 'text',
      required: false,
      defaultValue: 'Show less',
      admin: {
        description: 'CTA label for collapsing gallery items.',
      },
    },
  ],
}
