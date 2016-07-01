import path from 'path'
const base = path.join(__dirname, '..')
const resolve = path.resolve()
const pkg = `${base}/package.json`

let lint = [
  `${base}/src/**/*.js`,
  `${base}/webpack/**/*.js`
]

// Read ignore lint config
try {
  let ignore = require(pkg).standard.ignore
  ignore.map((item) => lint.push(`!${base}/${item}`))
} catch (e) {}

export default {
  base,
  resolve,
  pkg,
  lint,
  src: {
    client: `${base}/src/client`,
    server: `${base}/src/server`
  },
  dist: {
    client: `${base}/dist/client`,
    server: `${base}/dist/server`
  },
  webpack: `${base}/webpack`,
  node_modules: `${base}/node_modules`
}
