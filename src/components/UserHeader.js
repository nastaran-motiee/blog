import React from "react";
import { connect } from "react-redux";


class UserHeader extends React.Component {
    render() {
        const { user } = this.props;

        if (!user) {
            return null;
        }
        return (<h4 className="Header"> { user.name } </h4>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeader);
