import path from 'path'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: path.resolve('/data/media'), // Use the writable directory
    adminThumbnail: 'thumbnail', // Optional: Define a thumbnail field
  },
};
