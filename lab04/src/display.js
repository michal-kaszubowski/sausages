import {connect, useDispatch} from "react-redux";
import {deleteMovie, deleteDirector} from "./ducks/actions";

export const display = itemType => {
    const List = ({items}) => {
        const dispatch = useDispatch();

        return (
            <div className="List">
                <ul className="list">
                    {items.map(item => (
                        <li key={item.id}>
                            {Object.entries(item).map(prop => (<span>{prop[1]}</span>))}
                            <button onClick={
                                itemType === "movie"
                                    ? () => dispatch(deleteMovie(item.id))
                                    : () => dispatch(deleteDirector(item.id))
                            }>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    const mapMoviesToProps = state => ({items: state.movies});
    const mapDirectorsToProps = state => ({items: state.directors});

    switch (itemType){
        case "movie":
            return connect(mapMoviesToProps)(List);
        case "director":
            return connect(mapDirectorsToProps)(List);
        default:
            console.error("Invalid item type for display.js!");
    }
}