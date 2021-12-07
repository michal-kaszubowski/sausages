import {connect} from "react-redux";
import "./ui/Dashboard.css";

const Dashboard = ({movies}) => {
    return (
        <div className="Dashboard">
            {movies.sort((fst, scd) => fst.year >= scd.year ? 0 : 1).slice(0, 3).map(movie => (
                <div className="movie" key={movie.id}>
                    <div className="cover"/>
                    <div className="title">{movie.title}</div>
                    <div className="year">{movie.year}</div>
                    <div className="director">{movie.director}</div>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({movies: state.movies});

export default connect(mapStateToProps)(Dashboard);
