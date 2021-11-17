import { connect, useDispatch } from "react-redux"
import { deleteDirector } from "./directorActions";

const MovieList = ({directors}) => {
    const dispatch = useDispatch();

    return (
        <div className="DirectorList">
            <div className="movies">
                {directors.map(director => (
                    <div className={`movie-${director.id}`}>
                        <h1>{director.name}</h1>
                        <div className="yob">{director.yob}</div>
                        <button onClick={() => dispatch(deleteDirector(director.id))}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        directors: state.directors
    }
}

export default connect(mapStateToProps)(MovieList);