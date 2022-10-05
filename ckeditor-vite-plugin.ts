import { readFileSync } from 'node:fs'
import type { Plugin } from 'vite'

const fileRegex = /@ckeditor\/.*\.svg/

export default function VitePlugin(): Plugin {
  return {
    name: 'vite-ckeditor-svg-raw-plugin',
    transform(code, id) {
      if (fileRegex.test(id)) {
        code = readFileSync(id, 'utf8')
        const json = JSON.stringify(code)
          .replace(/\u2028/g, '\\u2028')
          .replace(/\u2029/g, '\\u2029')
        return {
          code: `export default ${json}`,
          map: { mappings: '' },
        }
      }
    },
    generateBundle(_, bundle) {
      for (const [filename, info] of Object.entries(bundle)) {
        if (info.name && fileRegex.test(info.name)) {
          delete bundle[filename]
        }
      }
    },
  }
}
