import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import webpackNodeExternals from 'webpack-node-externals';
import { VueLoaderPlugin } from 'vue-loader';

export const baseConfig: Configuration = {
	devtool: 'cheap-module-source-map',
	entry: './src/app.ts',
	target: 'web',
	mode: 'development',
	externals: [
		webpackNodeExternals({
			modulesDir: '../node_modules',
		}),
	],
	resolve: {
		extensions: [ '.ts', '.js', '.vue', '.json' ],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),

		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'index.html'),
			minify: {
				collapseWhitespace: true,
				minifyJS: true,
				removeComments: true,
			},
			title: 'Your business vue',
		}),
	],
}
