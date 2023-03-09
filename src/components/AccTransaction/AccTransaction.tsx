import React from "react";
import "./AccTransaction.scss";

/**
 * 
 * @param title Title operation of the transaction
 * @param amount The amount of the operation in dollars, formatted as follows: 2,000.10 will be displayed as $2,000.10 in the component.
 * @returns A section with his component that displays a transaction form with details about it and a button to view more information about the transaction.
 */
export default function AccTransaction({ title, amount }: { title: string, amount: string }): JSX.Element {

	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{title}</h3>
				<p className="account-amount">${amount}</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}
