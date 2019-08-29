import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash';

// Call action creator isnide action creator
export const fetchUserAndPosts = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // console.log(getState().posts)
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds);
    userIds.forEach(id => {
        dispatch(fetchUser(id))
    })
}


export const fetchPosts = () => async (dispatch) => {
        const responce = await jsonPlaceholder.get('/posts')
        dispatch({
            type: 'FETCH_POSTS', payload : responce.data
        })
};

export const fetchUser = (id) => async (dispatch) => {
    const responce = await jsonPlaceholder.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER', payload: responce.data
    });
};



// call to json placeholder API using lodash memiize function to avoid duplicate request for same user
// but we cannot send request if some user data change. memoize function always give same result

// export const fetchUser = (id) =>  (dispatch) => {
//     _fetchUser(id,dispatch);
// };

// const _fetchUser = _.memoize(async (id,dispatch)=> {
//     const responce = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USER', payload: responce.data
//     });
// })
