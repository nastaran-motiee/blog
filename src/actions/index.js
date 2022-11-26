import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => async disptch => {
    const response = await jsonplaceholder.get('/posts');
    disptch({type: 'FETCH_POSTS', payload: response});
};