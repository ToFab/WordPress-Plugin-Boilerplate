const path = require('path');

// Determine the mode from the environment variable
const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode: mode,
  entry: {
    'admin/js/index': './plugin-name/admin/ts/index.ts',
    'public/js/index': './plugin-name/public/ts/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'plugin-name')
  },
  // Additional configurations for development mode
  devtool: mode === 'development' ? 'inline-source-map' : false,
  watch: mode === 'development'
};