import {connect, useDispatch} from "react-redux";
import picture from "../sausage.jpg";
import {cacheObject} from "../store";
import {useNavigate} from "react-router-dom";

const SausageList = ({state}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="List">
            <div className="header">
                <button id="add" onClick={() => navigate("/sausages/add")}>+</button>
            </div>
            {state.sausages.map(sausage => (
                <div key={sausage._id}>
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
    );
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(SausageList);
