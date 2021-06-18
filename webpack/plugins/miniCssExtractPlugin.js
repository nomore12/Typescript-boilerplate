// Import dependencies.
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Import Configuration.
import { config } from '../configuration';

/**
 * CleanWebpackPlugin()
 * A webpack plugin to extracts CSS into separate files.
 */
export const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: config.CSS_FILE_OUTPUT,
});
