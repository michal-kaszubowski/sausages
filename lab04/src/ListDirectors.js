import {connect, useDispatch} from "react-redux";
import {deleteDirector} from "./ducks/directors/actions";

const ListDirectors = ({directors}) => {
    const dispatch = useDispatch();

    return (
        <div className="List">
            <ul className="list">
                {directors.map(director => (
                    <li key={director.id}>
                        <span className="firstName">{director.firstName}</span>
                        <span className="lastName">{director.lastName}</span>
                        <span className="age">Age: {director.age}</span>
                        <button onClick={() => dispatch(deleteDirector(director.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({directors: state.directors});

export default connect(mapStateToProps)(ListDirectors);