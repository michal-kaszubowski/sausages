import {connect, useDispatch} from "react-redux";
import {cacheObject} from "../../store";
import {useNavigate} from "react-router-dom";

const ManufacturerList = ({manufacturers}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="List">
            <div className="header">
                <button id="add" onClick={() => navigate("/manufacturers/add")}>+</button>
            </div>
            {manufacturers.map(manufacturer => (
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
