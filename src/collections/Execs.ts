import type { CollectionConfig } from 'payload'

export const Execs: CollectionConfig = {
  slug: 'execs',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // allow public read access
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'team', 
      type: 'select',
      required: true,
      options: [
        { label: 'Leadership', value: 'leadership' },
        { label: 'Social', value: 'social' },
        { label: 'Competitive', value: 'competitive' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'general',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media', // assumes you have a 'media' collection
    },
    {
      name: 'order',
      type: 'select',
      required: true,
      admin: {
        description: 'Sort priority (range 1–5, smaller numbers appear first)',
      },
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
      ],
      defaultValue: '5',
    },
  ],
}
export default Execs