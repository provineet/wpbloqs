const registerBlockType = wp.blocks.registerBlockType;
const __ = wp.i18n.__;
const el = wp.element;

registerBlockType( 'wpbloqs/firstblock', {
	title: __( 'First Block', 'wpbloqs' ),
	description: __( 'Our First Block', 'wpbloqs' ),
	category: 'layout',
	icon: {
		background: '#cc0000',
		foreground: '#fff',
		src: 'admin-generic',
	},
	keywords: [ __( 'photo', 'wpbloqs' ), __( 'media', 'wpbloqs' ) ],
	edit: () => {
		return el.createElement( 'h1', null, 'First Block Edit' );
	},
	save: () => {
		return el.createElement( 'h1', null, 'First Block Save' );
	},
} );
