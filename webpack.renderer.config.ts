import type { Configuration } from 'webpack'
import path from 'path'
import { rules } from './webpack.rules'
import { plugins } from './webpack.plugins'

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
})

export const rendererConfig: Configuration = {
  module: {
    rules
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      Animations: path.resolve(__dirname, './src/Animations'),
      Components: path.resolve(__dirname, './src/Components'),
      Screens: path.resolve(__dirname, './src/Screens'),
      Services: path.resolve(__dirname, './src/Services'),
      Styles: path.resolve(__dirname, './src/Styles'),
      Types: path.resolve(__dirname, './src/Types'),
      Validators: path.resolve(__dirname, './src/Validators'),
      Hooks: path.resolve(__dirname, './src/Hooks')
    }
  }
}
