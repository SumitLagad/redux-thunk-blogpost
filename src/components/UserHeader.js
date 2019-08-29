import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {


    render() {
        const user = this.props.user;
        
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

const mapStateToProps = (state, ownProps) => {
    return {user : state.user.find(user => user.id === ownProps.userID)}
}

export default connect( mapStateToProps )(UserHeader);