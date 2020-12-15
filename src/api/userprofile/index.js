import api from '../api';

const getUser = (id) => {
 return api.get(`/user/${id}`);
};


export {getUser};