import type { Configuration } from 'webpack'
import { rules } from './webpack.rules'
import path from 'path'

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
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
