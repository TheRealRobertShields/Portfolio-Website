import axios from 'axios';


const url = 'https://portfolio-robertshields.herokuapp.com/parts';

export const fetchParts = () => axios.get(url);
export const createPart = (newPart) => axios.post(url, newPart);
export const updatePart = (id, updatedPart) => axios.patch(url + '/' + id, updatedPart);
export const deletePart = (id) => axios.delete(url + '/' + id);

const urlUser = 'https://portfolio-robertshields.herokuapp.com/users'

export const fetchUsers = () => axios.get(urlUser);
export const createUser = (newUser) => axios.post(urlUser, newUser);
