import {connect} from "react-redux";

const List = ({state}) => {
    return (
        <div className="List">
            Hello there!
        </div>
    );
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(List);
