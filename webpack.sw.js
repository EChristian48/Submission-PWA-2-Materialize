const path = require('path')

module.exports = {
    mode: "production",
    entry: "./docs/sw.js",
    output: {
        path: path.resolve(__dirname, "./docs"),
        filename: "service-worker.js",
    },
}