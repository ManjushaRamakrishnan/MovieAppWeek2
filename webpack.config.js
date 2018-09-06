module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
   module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
     },
     {
       test: /\.css$/,
       exclude: /node_modules/,
       use: [
         {
           loader: 'style-loader',
         },
         {
           loader: 'css-loader',
         },
       ],
     },
     ],
    }
};