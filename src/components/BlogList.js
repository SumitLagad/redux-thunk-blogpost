import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class BlogList extends React.Component {

    componentDidMount() {
        console.log(this.props.fetchPosts());
    }

    render() {
        return(
            <div>
                Blog List
            </div>
        );
    }
}

export default connect(null,{fetchPosts})(BlogList);