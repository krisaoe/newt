module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext'),
    require('precss'),
    require('lost'),
    require('postcss-assets')({
      cachebuster: true,
      loadPaths: ['**']
    }),
    require('postcss-inline-svg')(),
    require('postcss-circle'),
    require('postcss-triangle'),
    require('postcss-write-svg'),
    require('postcss-sprites')
  ]
}
