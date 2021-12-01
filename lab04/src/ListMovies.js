import {connect, useDispatch} from "react-redux";
import {deleteMovie} from "./ducks/actions";

const ListMovies = ({movies}) => {
    const dispatch = useDispatch();

    return (
        <div className="List">
            <ul className="list">
                {movies.map(movie => (
                    <li key={movie.id}>
                        <>{movie.title}</>
                        <>Year of production: {movie.year}</>
                        <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({movies: state.movies});

export default connect(mapStateToProps)(ListMovies);