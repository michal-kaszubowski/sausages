import {connect, useDispatch} from "react-redux";
import {cacheObject} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {sortManufacturers} from "../../sorting/sortManufacturers";

const ManufacturerList = ({manufacturers}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sortBy, setSort] = useState();
    const sorted = sortManufacturers(manufacturers, sortBy);

    return (
        <div className="List">
            <div className="header">
                <button id="add" onClick={() => navigate("/manufacturers/add")}>+</button>
                <div className={"sort"}>
                    <span>Sortuj wg. roku</span>
                    <select className="selectSort" onChange={event => setSort(event.target.value)}>
                        <option value="null">-</option>
                        <option value="normal">rosnąco</option>
                        <option value="reverse">malejąco</option>
                    </select>
                </div>
            </div>

            {sorted.map(manufacturer => (
                <div key={manufacturer._id}>
                    <div>{manufacturer.name}</div>
                    <button id="details" onClick={
                        () => {
                            dispatch(cacheObject(manufacturer));
                            navigate("/manufacturers/details");
                        }
                    }>...</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({manufacturers: state.manufacturers});

export default connect(mapStateToProps)(ManufacturerList);
