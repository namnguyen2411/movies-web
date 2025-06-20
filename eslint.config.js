import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintPluginPrettierRecommended
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: react,
      importPlugin
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.app.json'
        }),
        node: true
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'prettier/prettier': [
        'warn',
        {
          plugins: ['prettier-plugin-tailwindcss'],
          arrowParens: 'always',
          trailingComma: 'none',
          semi: false,
          singleQuote: true,
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'auto'
        }
      ]
    }
  }
)
