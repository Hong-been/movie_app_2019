import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
	return (
		<div className="movie">
			<img className="movie__poster" src={poster} alt={title} title={title} />
			<div className="movie__data">
				<div className="movie__title">{title}</div>
				<div className="movie__year">{year}</div>
				<ul className="genres">
					{genres.map((genre, index) => (
						<li className="genres__genre" key={index}>
							{genre}
						</li>
					))}
				</ul>
				<p className="movie__summary">{summary.slice(0, 180)}...</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
