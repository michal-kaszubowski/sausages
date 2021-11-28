import {connect} from "react-redux";

const Display = props => {

    const List = ({items}) => {
        console.log("Received items: ", items);
        return (
            <div className="List">
                <ul className="list">
                    {items.map(item => (
                        <li key={item.id}>
                            {Object(item).map(attr => <span>{attr}</span>)}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return connect(
        props.itemType === "movie"
            ? state => ({items: state.movies})
            : state => ({items: state.directors})
    )(List);
}

export default Display
