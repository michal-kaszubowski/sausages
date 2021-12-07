import {connect, useDispatch} from "react-redux";
import {deleteDirector} from "../ducks/directors/actions";
import "../ui/ListDirectors.css"

const ListDirectors = ({directors}) => {
    const dispatch = useDispatch();

    return (
        <div className="ListDirectors">
            <h3>All directors:</h3>
            <ul className="list">
                {directors.map(director => (
                    <li key={director.id}>
                        <span className="firstName">{director.firstName}</span>
                        <span className="lastName">{director.lastName}</span>
                        <button id="bin" onClick={() => dispatch(deleteDirector(director.id))}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({directors: state.directors});

export default connect(mapStateToProps)(ListDirectors);