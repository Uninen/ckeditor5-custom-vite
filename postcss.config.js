/* eslint-disable @typescript-eslint/no-var-requires */
const { styles } = require('@ckeditor/ckeditor5-dev-utils')

const config = styles.getPostCssConfig({
  themeImporter: {
    themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
  },
  minify: true,
})

module.exports = {
  plugins: [
    ...config.plugins,
    require('tailwindcss')(),
    require('@tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer')(),
  ],
}
