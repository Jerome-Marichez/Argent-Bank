import React from "react";
import "./Footer.scss";

/**
 * 
 * @example <Footer/>
 * @return A footer section with copyright at the actual year 
 */
export default function Footer(): JSX.Element {

	const year: number = new Date().getFullYear();
	return (
		<footer className="footer">
			<p className="footer-text">Copyright {year} Argent Bank</p>
		</footer>
	);
	
}