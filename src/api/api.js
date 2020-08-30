import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api"

export default{
    getPost(){
        return axios.get('/posts')
    },
    addPost(data){
        return axios.post('/posts',data)
    },
    deletePost(id){
        return axios.delete('/posts',{
            headers:{
                "Content-Type": "application/json;charset=utf-8" 
            },
            params:{
                id:id
            }
        })
    }
}