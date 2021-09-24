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
				<div
					className="background"
					style={{ backgroundImage: "url(" + poster + ")" }}
				>
					<div className="detail">
						<img
							className="detail__poster"
							src={poster}
							alt={title}
							title={title}
						/>
						<div className="detail__data">
							<div className="detail__title">{title}</div>
							<div className="detail__year">{year}</div>
							<ul className="detail__genres">
								{genres.map((genre, index) => (
									<li className="genres__genre" key={index}>
										{genre}
									</li>
								))}
							</ul>
							<p className="detail__summary">{summary}</p>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;
