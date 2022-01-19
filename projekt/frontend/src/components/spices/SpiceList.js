import {connect, useDispatch} from "react-redux";
import {cacheObject} from "../../store";
import {useNavigate} from "react-router-dom";

const SpiceList = ({spices}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="List">
            <div className="header">
                <button id="add" onClick={() => navigate("/spices/add")}>+</button>
            </div>
            {spices.map(spice => (
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
