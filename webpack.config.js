const path = require( 'path' );
const { argv } = require( 'process' );

function isDevelopment() {
	return argv.mode === 'development';
}

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'panelscripts.js',
	},
	mode: argv.mode,
	devtool: isDevelopment() ? 'cheap-module-eval-source-map' : 'source-map',
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
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
};
