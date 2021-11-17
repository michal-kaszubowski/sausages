import { connect, useDispatch } from "react-redux"
import { deleteMovie } from "./movieActions";

const MovieList = ({movies}) => {
    const dispatch = useDispatch();

    return (
        <div className="MovieList">
            <div className="movies">
                {movies.map(movie => (
                    <div className={`movie-${movie.id}`}>
                        <h1>{movie.title}</h1>
                        <div className="year">{movie.year}</div>
                        <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList);