import CompressionPlugin from 'compression-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { baseConfig } from './webpack.config';

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

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

		new CompressionPlugin({
			test: /\.js$/
		}),

		new HtmlWebpackExternalsPlugin({
			externals: [
				{
					module: 'vue',
					entry: 'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
					global: 'Vue',
				},
				{
					module: 'vue-router',
					entry: 'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
					global: 'Router',
				},
			],
		}),
	],
});

export default config;
