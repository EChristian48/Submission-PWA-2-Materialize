const path = require('path')

// Karena GitHub pages kayanya ga nge-serve folder dist
// Jadi ditaro di js/dist
// EDIT: Ternyata emang masalah sama GitHub Pages
module.exports = {
    mode: "production",
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
}