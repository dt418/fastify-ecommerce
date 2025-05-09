import antfu from '@antfu/eslint-config'
import drizzle from 'eslint-plugin-drizzle'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu({
  ignores: [
    '**/dist/**',
    '**/node_modules/**',
    '**/build/**',
    '**/coverage/**',
    '**/public/**',
    '**/out/**',
  ],
  plugins: {
    drizzle,
    perfectionist,
  },
  react: false,
  rules: {
    'drizzle/enforce-delete-with-where': 'error',
    'drizzle/enforce-update-with-where': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'type-import',
          ['value-builtin', 'value-external'],
          'type-internal',
          'value-internal',
          ['type-parent', 'type-sibling', 'type-index'],
          ['value-parent', 'value-sibling', 'value-index'],
          'ts-equals-import',
          'unknown',
        ],
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        order: 'asc',
        type: 'natural',
      },
    ],
  },
  // Enable TypeScript support
  typescript: true,
  // If you're using Node/Fastify and not frontend frameworks:
  vue: false,
})
