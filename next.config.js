const withMDX = require('@next/mdx')()

  
module.exports = withMDX({
pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})


// module.exports = {
//   experimental: {esmExternals: true},
//   pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.mdx?$/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: '@mdx-js/loader',
//           /** @type {import('@mdx-js/loader').Options} */
//           options: {/* jsxImportSource: …, otherOptions… */}
//         }
//       ]
//     })

//     return config
//   }
// }