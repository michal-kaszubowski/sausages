import {connect} from "react-redux";

const Counter = ({state}) => {
    return (
        <div className="counter">
            {state}
        </div>
    );
}

const mapStateToProps = state => ({state})

export default connect(mapStateToProps)(Counter);
