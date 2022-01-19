import {connect, useDispatch} from "react-redux";
import {deleteManufacturer} from "../../ducks/manufacturers/operations";
import {useNavigate} from "react-router-dom";

const ManufacturerDetails = ({manufacturer}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="Details">
            <div className="header">
                <button id="back" onClick={() => navigate("/manufacturers")}>&larr;</button>
            </div>
            <div id="name">
                Nazwa:
                <span>{manufacturer.name}</span>
            </div>
            <div id="origin">
                Pochodzenie:
                {manufacturer.origin
                    ? (<span>{manufacturer.origin}</span>)
                    : (<span>Nieznane</span>)
                }
            </div>
            <div id="id">
                Kod identyfikacyjny:
                <span>{manufacturer._id}</span>
            </div>
            <div id="established">
                Rok założenia:
                <span>{manufacturer.established}</span>
            </div>
            <div className="footer">
                <button id="edit" onClick={() => navigate("/manufacturers/edit")}>&#9881;</button>
                <button id="delete" onClick={
                    () => {
                        dispatch(deleteManufacturer(manufacturer))
                            .then(navigate("/manufacturers"))
                            .catch(err => console.error(err));
                    }
                }>&#128465;</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({manufacturer: state.cache});

export default connect(mapStateToProps)(ManufacturerDetails);
