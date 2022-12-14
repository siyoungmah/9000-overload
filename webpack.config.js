const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/main.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/, 
        use: [{ loader: 'ts-loader' }]
      }
    ]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    }
  },
  {
    mode: 'development',
    entry: './src/index.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }
    ]
    },
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".ts", ".tsx"],
    },
    output: {
      path: __dirname + '/dist',
      filename: 'index.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }
];