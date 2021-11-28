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

const mapMoviesToProps = state => ({items: state.movies});
const mapDirectorsToProps = state => ({items: state.directors});

export const ListMovies = connect(mapMoviesToProps)(List);
export const ListDirectors = connect(mapDirectorsToProps)(List);