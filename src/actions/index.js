import jsonPlaceholder from '../api/jsonPlaceholder'

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