import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts = () => async (dispatch) => {
        const responce = await jsonPlaceholder.get('/posts')
    
        dispatch({
            type: 'FETCH_POST',payload : responce
        })
    };

