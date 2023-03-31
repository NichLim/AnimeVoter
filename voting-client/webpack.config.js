module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx',]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist',
        hot: true
    },
    mode: 'development'
};