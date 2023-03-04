const path = require('path')

module.exports = (env) => {
    return {
        entry: './src/index',
        module: {
            rules: [
                {
                    test: /\.ts(x)?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve('dist'),
        },
    }
}
