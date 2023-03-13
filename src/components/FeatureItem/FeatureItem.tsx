import React from "react";
import "./FeatureItem.scss";


interface FeatureItemProps  {
	title: string
	subtitle: string
	icon: 'chat' | 'money' | 'security'
}

/**
 * 
 * @param title Display a main title to the component
 * @param subtitle Display a subtitle to the component
 * @param icon Display a Icon, accept parameter 'chat' | 'money' | 'security
 * @example <FeatureItem
	      title={"More savings means higher rates"}
	      subtitle={"The more you save with us, the higher your interest rate will be!"}
	      icon={"money"}
	    /> 
 * @returns A component who display a Feature Item with his title,subtitle and icon
 */
export default function FeatureItem({ title, subtitle, icon }: FeatureItemProps): JSX.Element {

	return (
		<div className="feature-item">

			{icon ? <img src={require(`./icon-${icon}.png`)} alt={`${icon} icon`} className="feature-icon" /> : null}
			<h3 className="feature-item-title">{title}</h3>
			<p>
				{subtitle}
			</p>
		</div>
	);

}