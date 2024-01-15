import axios, {AxiosResponse} from 'axios'
import {PostType} from "../Types/types.ts";
class ApiService {
    static async getAllPosts(){
        const  response: AxiosResponse<PostType[]> = await axios.get('http://localhost:3000/posts');
        return response.data
    }
    static async deletePost(id:PostType['id']){
        return  await axios.delete(`http://localhost:3000/posts/${id}`);
    }

}

export default ApiService
