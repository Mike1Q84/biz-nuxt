import path from 'path';
import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { baseConfig } from './webpack.config';

export const config: Configuration = webpackMerge(baseConfig, {
	mode: 'production',
	devtool: 'source-map',

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: `biz-vue.min.js`,
		sourceMapFilename: '[file].map',
	},

	plugins: [
		new UglifyJsPlugin({
			sourceMap: true,
		}),
	],
});

export default config;
