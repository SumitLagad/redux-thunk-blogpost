import React from 'react';
import { connect } from 'react-redux';
import { fetchUserAndPosts } from '../actions';
import UserHeader from './UserHeader';

class BlogList extends React.Component {

    componentDidMount() {
        this.props.fetchUserAndPosts();
    }

    renderList () {
        return this.props.posts.map( post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />                        
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userID={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="ui relaxed divided list"> 
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts};
}

export default connect(mapStateToProps,{fetchUserAndPosts})(BlogList);