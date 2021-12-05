import {connect, useDispatch} from "react-redux";
import {deleteMovie} from "../ducks/movies/actions";

const ListMovies = ({movies}) => {
    const dispatch = useDispatch();

    return (
        <div className="List">
            <ul className="list">
                {movies.map(movie => (
                    <li key={movie.id}>
                        <span className="title">{movie.title}</span>
                        <span className="year">Year of production: {movie.year}</span>
                        <button>More</button>
                        <span onClick={() => dispatch(deleteMovie(movie.id))}>🗑️</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({movies: state.movies});

export default connect(mapStateToProps)(ListMovies);