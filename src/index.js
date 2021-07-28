import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './components/panel/reschedule/reschedule.scss';

function FirstJSX( props ) {
	return (
		<Fragment>
			<h1 className="hello">Hello, { props.title }</h1>
			<p>This is our first React Component.</p>
		</Fragment>
	);
}

ReactDOM.render(
	<FirstJSX title="Vineet Verma" />,
	document.getElementById( 'root' )
);
