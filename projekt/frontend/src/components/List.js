import {connect} from "react-redux";

const List = ({state}) => {
    return (
        <div className="List">
            {state.sausages.map(sausage => (
                <div key={sausage._id}>.</div>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(List);
