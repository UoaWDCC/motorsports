import type { CollectionConfig } from 'payload'

export const Execs: CollectionConfig = {
  slug: 'execs',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // allow public read access
  },
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
  ],
}
export default Execs