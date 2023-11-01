import axios from 'axios';

const postsApi = axios.create({
    baseURL: "http://localhost:8080"
})
export const getAllPosts = async () => {
    const response = await postsApi.get('/board');
    return response.data;
}

export const getPost = async (id) => {
    return (await postsApi.get(`http://localhost:8080/board/post?id=${id}`)).data;
}

export const deletePost = async (id) => {
    await postsApi.delete(`/board/delete?id=${id}`);
}

// export const addPost = async (post) => {
//     return await postsApi.post('', post)
// }

// export const updatePost = async (post) => {
//     return await postsApi.patch('', post)
// }