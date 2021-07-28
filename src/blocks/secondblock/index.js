import './style.scss';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType( 'wpbloqs/secondblock', {
	title: __( 'Second Block', 'wpbloqs' ),
	description: __( 'Our Second Block', 'wpbloqs' ),
	category: 'layout',
	icon: {
		background: '#cc0000',
		foreground: '#fff',
		src: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 0 24 24"
				width="24px"
				fill="#000000"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
			</svg>
		),
	},
	keywords: [ __( 'photo', 'wpbloqs' ), __( 'media', 'wpbloqs' ) ],
	edit: ( props ) => {
		const classes = `${ props.className } red-text`;
		return <h2>Second Block Edit</h2>;
	},
	save: ( props ) => {
		return <h2>Second Block Save</h2>;
	},
} );
