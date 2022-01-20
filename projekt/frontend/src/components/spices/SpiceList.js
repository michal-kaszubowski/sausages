import {connect, useDispatch} from "react-redux";
import {cacheObject} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {sortSpices} from "../../sorting/sortSpices";
import {useState} from "react";

const SpiceList = ({spices}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sortBy, setSort] = useState();
    const sorted = sortSpices(spices, sortBy);

    return (
        <div className="List">
            <div className="header">
                <button id="add" onClick={() => navigate("/spices/add")}>+</button>
                <div className={"sort"}>
                    <span>Sortuj wg. ceny</span>
                    <select className="selectSort" onChange={event => setSort(event.target.value)}>
                        <option value="null">-</option>
                        <option value="price">rosnąco</option>
                        <option value="priceReverse">malejąco</option>
                    </select>
                </div>
            </div>
            {sorted.map(spice => (
                <div key={spice._id}>
                    <div>
                        <span>{spice.name}</span>
                        <span>z</span>
                        {spice.origin
                            ? (<span>{spice.origin}</span>)
                            : (<span>Brak danych</span>)
                        }
                    </div>
                    <div>
                        <span>zł/100g:</span>
                        <span>{spice.price}</span>
                    </div>
                    <button id="edit" onClick={
                        () => {
                            dispatch(cacheObject(spice));
                            navigate("/spices/edit");
                        }
                    }>&#9881;</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({spices: state.spices});

export default connect(mapStateToProps)(SpiceList);
