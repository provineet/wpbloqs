import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

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
	edit: ( props ) => {
		const classes = `${ props.className } red-text`;
		return <h2 className={ classes }>First Block Edit</h2>;
	},
	save: ( props ) => {
		return <h2 className="red-text">First Block HERE Save</h2>;
	},
} );
