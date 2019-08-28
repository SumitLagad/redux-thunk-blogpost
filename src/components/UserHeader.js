import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index'

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userID)
    }
    render() {
        const user = this.props.users.find((user) => user.id === this.props.userID);
        if (!user) {
            return null;
        }
        return(
            <div>
                {user.name}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {users : state.user}
}

export default connect( mapStateToProps,{fetchUser:fetchUser} )(UserHeader);