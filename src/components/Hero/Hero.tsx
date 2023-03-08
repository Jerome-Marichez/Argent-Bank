import React from "react";
import "./Hero.scss";
import Background from "./bank-tree.jpeg";


/**
 * @param title A array of title which are display line per line
 * @param subtitle A subtitle display after title
 * @example <Hero title={['No fees.', 'No minimum deposit.', 'High interest rates.']} subtitle={"Open a savings account with Argent Bank today!"} />
 * @returns A component who display a Hero Section
 */
export default function Hero({ title, subtitle }: { title: Array<string>, subtitle: string }): JSX.Element {

	return (
		<div className="hero" style={{ backgroundImage: `url(${Background})` }}>
			<section className="hero-content">
				<h2 className="sr-only">Promoted Content</h2>
				{title.map((subtitle, key) => <p key={key} className="subtitle">{subtitle}</p>)}
				<p className="text">{subtitle}</p>
			</section>
		</div>
	);
}