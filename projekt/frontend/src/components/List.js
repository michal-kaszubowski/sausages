import {connect} from "react-redux";
import picture from "../sausage.jpg";

const List = ({state}) => {
    return (
        <div className="List">
            {state.sausages.map(sausage => (
                <div key={sausage._id}>
                    {sausage.image
                        ? (<img src={sausage.image} alt={sausage.type}/>)
                        : (<img src={picture} alt={"obrazek z kiełbaskami"}/>)
                    }
                    <div>{sausage.type}</div>
                    <div>{sausage.price}</div>
                    <div>{sausage.manufacturer.name}</div>
                    <button className={"details"}>...</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(List);
