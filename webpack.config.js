const path = require( 'path' );
const { argv } = require( 'process' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

function isDevelopment() {
	return argv.mode === 'development';
}

module.exports = {
	entry: './src/editor.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'dist' ),
		clean: true,
	},
	mode: argv.mode,
	devtool: isDevelopment() ? 'cheap-module-eval-source-map' : 'source-map',
	plugins: [
		new MiniCssExtractPlugin( {
			filename: 'wpbloqs.css',
		} ),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@wordpress/babel-preset-default' ],
					},
				},
			},
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'autoprefixer',
										{
											// autoprefixer Options
										},
									],
								],
							},
						},
					},
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	optimization: {
		minimizer: [ new TerserPlugin(), new CssMinimizerPlugin() ],
	},
};
