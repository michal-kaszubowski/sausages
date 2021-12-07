import {connect, useDispatch} from "react-redux";
import {deleteMovie} from "../ducks/movies/actions";
import "../ui/ListMovies.css"

const ListMovies = ({movies}) => {
    const dispatch = useDispatch();

    return (
        <div className="ListMovies">
            <h3>All movies:</h3>
            <ul className="list">
                {movies.map(movie => (
                    <li key={movie.id}>
                        <span className="title">{movie.title}</span>
                        <span className="year">{movie.year}</span>
                        <button id="more">More</button>
                        <button id="bin" onClick={() => dispatch(deleteMovie(movie.id))}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({movies: state.movies});

export default connect(mapStateToProps)(ListMovies);
