import userApi from '../api/userApi';
import history from '../components/history/History';

export const getAllUsers = () => async dispatch =>{
    const response = await userApi.get('/users');
    dispatch({type: "USER_DETAILS", payload: response.data});
}

export const addUser = (user) => async dispatch =>{
    const response = await userApi.post('/users',user);
    dispatch({type: "ADD_USER", payload: response.data});
    history.push('/user/list');
}

export const editUser = (id,user) => async dispatch =>{
    const response = await userApi.put(`/users/${id}`,user);
    dispatch({type: "EDIT_USER", payload: response.data});
    history.push('/user/list');
}

export const getUser = (id) => async dispatch =>{
    const response = await userApi.get(`/users/${id}`);
    dispatch({type: "GET_USER", payload: response.data});
}