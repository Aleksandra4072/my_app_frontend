import axios from 'axios';

export const getAllPosts = async () => {
    return (await axios.get('http://localhost:8080/board')).data;
}

export const getPost = async (id) => {
    return (await axios.get(`http://localhost:8080/board/post?id=${id}`)).data;
}