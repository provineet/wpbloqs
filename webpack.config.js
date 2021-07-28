const path = require( 'path' );
const { argv } = require( 'process' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

function isDevelopment() {
	return argv.mode === 'development';
}

module.exports = {
	entry: {
		editor: './src/editor.js',
		script: './src/script.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'dist' ),
		clean: true,
	},
	mode: argv.mode,
	devtool: isDevelopment() ? 'cheap-module-eval-source-map' : 'source-map',
	plugins: [
		new MiniCssExtractPlugin( {
			filename: ( { chunk } ) =>
				chunk.name === 'script' ? 'style.css' : '[name].css',
		} ),
		new DependencyExtractionWebpackPlugin(),
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
	externals: {
		jquery: 'jQuery',
	},
};
