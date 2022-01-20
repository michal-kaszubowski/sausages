import {connect, useDispatch} from "react-redux";
import picture from "../../sausage.jpg";
import {cacheObject} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {sortSausages} from "../../sorting/sortSausages";

const SausageList = ({sausages, manufacturers}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sortBy, setSort] = useState("null");
    const sorted = sortSausages(sausages, sortBy);

    return (
        <div className="List">
            <div className="header">
                <button id="add" onClick={() => navigate("/sausages/add")}>+</button>
                <div className={"sort"}>
                    <span>Sortuj wg.</span>
                    <select className="selectSort" onChange={event => setSort(event.target.value)}>
                        <option value="null">-</option>
                        <option value="price">ceny rosnąco</option>
                        <option value="priceReverse">ceny malejąco</option>
                        {manufacturers.map(manufacturer => (
                            <option value={manufacturer._id} key={manufacturer._id}>{manufacturer.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="list">
                {sorted.map(sausage => (
                    <div className="item" key={sausage._id}>
                        {sausage.image
                            ? (<img src={sausage.image} alt={sausage.type}/>)
                            : (<img src={picture} alt={"obrazek z kiełbaskami"}/>)
                        }
                        <div>{sausage.type}</div>
                        <div>{sausage.price}</div>
                        <div>{sausage.manufacturer.name}</div>
                        <button id="details" onClick={
                            () => {
                                dispatch(cacheObject(sausage));
                                navigate("/sausages/details");
                            }
                        }>...</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({sausages: state.sausages, manufacturers: state.manufacturers});

export default connect(mapStateToProps)(SausageList);
