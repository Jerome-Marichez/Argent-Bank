import React from "react";
import Hero from '../components/Hero/Hero';
import FeatureItem from '../components/FeatureItem/FeatureItem';
 
/**
 * 
 * @returns A Page Home which wrap HTML Elements + Components
 */
export default function Home(): JSX.Element {
	
	return (
		<main>
			<Hero
				title={['No fees.', 'No minimum deposit.', 'High interest rates.']}
				subtitle={"Open a savings account with Argent Bank today!"}
			/>
			<section id="features" className="features">
				<h2 className="sr-only">Features</h2>

				<FeatureItem
					title={"You are our #1 priority"}
					subtitle={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
					icon={"chat"}
				/>
				<FeatureItem
					title={"More savings means higher rates"}
					subtitle={"The more you save with us, the higher your interest rate will be!"}
					icon={"money"}
				/>
				<FeatureItem
					title={"Security you can trust"}
					subtitle={"We use top of the line encryption to make sure your data and money is always safe."}
					icon={"security"}
				/>
			</section>
		</main>
	);

}