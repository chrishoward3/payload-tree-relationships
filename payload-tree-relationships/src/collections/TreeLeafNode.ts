import type { CollectionConfig } from 'payload'

export const TreeLeafNode: CollectionConfig = {
  slug: 'tree-leaf-nodes',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'myparent',
      type: 'relationship',
      relationTo: 'tree-branch-nodes',
    },
  ],
}
