module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a valid name to reference 
            query: {
                presets: ['es2015', 'react']
    
            }
        }]
    }
};