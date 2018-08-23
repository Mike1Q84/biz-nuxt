import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import { baseConfig } from './webpack.config';

export const config: Configuration = webpackMerge(baseConfig, {
	devServer: {
		port: 3000,
		headers: { 'Access-Control-Allow-Origin': '*' },
		historyApiFallback: true,
		noInfo: false,
		stats: 'errors-only',
	},
});

export default config;
