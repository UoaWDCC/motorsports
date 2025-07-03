import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
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
      name: 'info',
      type: 'textarea',
      required: true,
    },
    {
      name: 'dateStart',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime', // shows both date and time
        },
      },
    },
    {
      name: 'dateEnd',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime', // shows both date and time
        },
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'text', // Or use 'upload' if you want to use Payload's media library
      required: true,
    },
  ],
}
export default Events