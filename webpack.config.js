const path = require("path")

module.exports = {
    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    devtool: "eval-source-map",
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "dist"),
    },
    module: {
        rules: [
            {
                test: "/.css$/",
                use: ["style-loader", "css-loader"],
            },
            {
                test: "/.html$/",
                use: ["html-loader"],
            },
        ],
    },
}
