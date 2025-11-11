import type { CollectionConfig } from 'payload'

export const TreeRootNode: CollectionConfig = {
  slug: 'tree-root-nodes',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'children',
      type: 'join',
      collection: 'tree-branch-nodes',
      on: 'parent',
    },
  ],
}
