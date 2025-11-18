const pkg = require("./package.json")
const pluginNodeResolve = require("@rollup/plugin-node-resolve")

module.exports = {
    input: "./src/index.js",
    output: {
        name: 'corejs',
        file: "./dist/core.js",
        format: "umd",
        banner: `/*!
 * @oipage/corejs v${pkg.version}
 * git+https://github.com/oi-contrib/oipage-corejs.git
 */`
    },
    plugins: [pluginNodeResolve()]
}
