import {connect} from "react-redux";

const List = ({items}) => {
    console.log("Received items: ", items);
    return (
        <div className="List">
            <ul className="list">
                {items.map(item => (
                    <li key={item.id}>
                        {Object.entries(item).map(prop => <span>{prop}</span>)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    console.log("Mapping movies to props...");
    return {
        items: state.movies
    };
}

export default connect(mapStateToProps)(List);