import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

export const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<img className="logo" src="crwn-logo.png" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop"> SHOP </Link>
					<Link className="nav-link" to="/sign-in"> SIGN IN </Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}	