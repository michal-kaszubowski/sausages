import {connect, useDispatch} from "react-redux";
import {deletePack} from "../ducks/actions";

const PacksList = ({packs}) => {
    const dispatch = useDispatch()

    return (
        <div className="list">
            <h2>Packs for delivery:</h2>
            {packs.map(pack => (
                <div className="pack">
                    <div>{pack.addressee}</div>
                    <div>
                        {pack.items.map(item => (
                            <div className="item">{item}</div>
                        ))}
                    </div>
                    <button>Add new gift!</button>
                    <button onClick={dispatch(deletePack)}>Delete gift.</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        packs: state.packs
    };
}

export default connect(mapStateToProps, PacksList);
