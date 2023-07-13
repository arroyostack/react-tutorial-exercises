import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Jumbotron = ({ title, description, buttonLabel, buttonURL }) => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{title}</h1>
			<p className="lead">{description}</p>
			<a className="btn btn-primary btn-lg" href={buttonURL} role="button">{buttonLabel}</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
