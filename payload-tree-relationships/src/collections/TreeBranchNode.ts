import type { CollectionConfig } from 'payload'

export const TreeBranchNode: CollectionConfig = {
  slug: 'tree-branch-nodes',
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
      name: 'parent',
      type: 'relationship',
      relationTo: ['tree-root-nodes', 'tree-branch-nodes'],
      required: true,
    },
    {
      name: 'children',
      type: 'join',
      collection: ['tree-branch-nodes', 'tree-leaf-nodes'],
      on: 'parent',
    },
  ],
}
