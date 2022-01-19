import {connect, useDispatch} from "react-redux";
import {deleteSausage} from "../ducks/sausages/operations";
import {useNavigate} from "react-router-dom";
import picture from "../sausage.jpg";

const SausageDetails = ({sausage}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="Details">
            <div className="header">
                <button id="back" onClick={() => navigate("/")}>&larr;</button>
            </div>
            {sausage.image
                ? (<img src={sausage.image} alt={sausage.type}/>)
                : (<img src={picture} alt={"obrazek z kiełbaskami"}/>)
            }
            <div id="type">
                Rodzaj:
                <span>{sausage.type}</span>
            </div>
            <div id="origin">
                Pochodzenie:
                {sausage.origin
                    ? (<span>{sausage.origin}</span>)
                    : (<span>Nieznane</span>)
                }
            </div>
            <div id="id">
                Kod identyfikacyjny:
                <span>{sausage._id}</span>
            </div>
            <div id="price">
                zł/kg:
                <span>{sausage.price}</span>
            </div>
            <div id="manufacturer">
                Producent:
                <span>{sausage.manufacturer.name}</span>
                z
                {sausage.manufacturer.origin
                    ? <span>{sausage.manufacturer.origin}</span>
                    : <span>Brak danych</span>
                }
            </div>
            <div id="spice">
                Zalecana przyprawa:
                {sausage.spice
                    ? <div>
                        <span>{sausage.spice.name}</span>
                        zł/100g:
                        <span>{sausage.spice.price}</span>
                    </div>
                    : <div>
                        Brak danych
                    </div>
                }
            </div>
            <div className="footer">
                <button id="edit" onClick={() => navigate("/sausages/edit")}>&#9881;</button>
                <button id="delete" onClick={
                    () => {
                        dispatch(deleteSausage(sausage));
                        navigate("/")
                    }
                }>&#128465;</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({sausage: state.cache});

export default connect(mapStateToProps)(SausageDetails);
