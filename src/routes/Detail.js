import React from "react";
import "./Detail.css";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}
	render() {
		const {
			location: { state },
		} = this.props;

		if (state) {
			const { title, year, poster, genres, summary } = state;
			return (
				<div className="movie">
					<img
						className="movie__poster"
						src={poster}
						alt={title}
						title={title}
					/>
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
						<p className="movie__summary">{summary}</p>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
