import userApi from '../api/userApi';

export const getAllUsers = () => async dispatch =>{
    const response = await userApi.get('/users');
    dispatch({type: "USER_DETAILS", payload: response.data});
}