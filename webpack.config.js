const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: 'explorer-card.js',
    path: path.resolve(__dirname)
  },
  module:{
    rules: [
        {
            test: /\.js?/,
            include: path.resolve(__dirname,'src'),
            use:{
                loader:'babel-loader',
                query:{
                    presets:['@babel/env']
                }
            }
        }
    ]
},
};