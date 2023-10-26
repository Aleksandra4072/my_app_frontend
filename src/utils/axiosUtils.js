import axios from 'axios';

export const getAllPosts = async () => {
    return (await axios.get('http://localhost:8080/board')).data;
}

export const contentCut = (content) => {
    return content.slice(0, 80) + '...';
}