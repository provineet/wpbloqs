<?php

/**
 * Plugin Name: WPBloqs
 * Plugin URI: https://wpbloqs.com
 * Description: Gutenberg Blocks
 * Version: 1.0.0
 * Requires at least: 5.2
 * Requires PHP: 7.2
 * Author: Vineet Verma
 * Author URI: https://blogohblog.com/
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wpbloqs
 * Domain Path: /languages
 */

( defined( 'ABSPATH' ) ) || exit();

( defined( 'WPBQ_NAME' ) ) || define( 'WPBQ_NAME', 'WPBloqs' );

( defined( 'WPBQ_VERSION' ) ) || define( 'WPBQ_VERSION', '1.0.0' );

function wpbq_register_scripts() {
		wp_register_script(
			'wpbq-editor-script',
			plugins_url( 'dist/editor.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
			WPBQ_VERSION,
			true
		);
		wp_register_script(
			'wpbq-script',
			plugins_url( 'dist/script.js', __FILE__ ),
			array( 'jquery' ),
			WPBQ_VERSION,
			true
		);
		wp_register_style( 'wpbq-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), array( 'wp-edit-blocks' ), WPBQ_VERSION );
		wp_register_style( 'wpbq-style', plugins_url( 'dist/style.css', __FILE__ ), array( 'wp-edit-blocks' ), WPBQ_VERSION );
}

function wpbq_register_block_type( $name, $options = array() ) {

	register_block_type(
		'wpbloqs/' . $name,
		wp_parse_args(
			$options,
			array(
				'editor_script' => 'wpbq-editor-script',
				'editor_style'  => 'wpbq-editor-style',
				'script'        => 'wpbq-script',
				'style'         => 'wpbq-style',
			)
		)
	);

}

function wpbq_register_blocks() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Block editor is not available.
		return;
	}

	// register scripts for blocks
	wpbq_register_scripts();

	// wpboqs/firstblock
	wpbq_register_block_type( 'firstblock' );
	// wpboqs/secondblock
	wpbq_register_block_type( 'secondblock' );
}

add_action( 'init', 'wpbq_register_blocks' );
