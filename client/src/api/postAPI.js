import axios from 'axios';

// All URLS
const postURL = 'http://localhost:5000/posts/';
const authorURL = 'http://localhost:5000/authors/';
const commentURL = 'http://localhost:5000/comments/';

// post list api
export default async function PostAPI() {
    const response = await axios.get(postURL);
    return response.data
}

// author list api
export async function authorAPI(id) {
    const response = await axios.get(authorURL+ `${id}` );
    return response.data
}

// single post api
export async function OnePostAPI(id) {
    const response = await axios.get(postURL+`${id}`);
    return response.data
}

// single author api
export async function GetAuthorName(id) {
    const response = await axios.get(authorURL+`${id}`);
    return response.data.author
}

// all comments api
export async function GetComments() {
    const response = await axios.get(commentURL);
    return response.data
}


