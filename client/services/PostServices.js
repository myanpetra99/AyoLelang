const url = 'http://localhost:8081/api/post'
import Vue from 'vue'
class PostServices{

   static async getPost(){
     let posts = await axios.get(url)
     return posts.data
    }

    static async getOne(id){
        let posts = await axios.get(url+'/'+id)
        return posts.data
       }

    static async createPost(fd,cf){
     return await axios.post(url,fd,cf).then(res => {
         console.log(res)
     
     })
    }

    static async deletePost(id){
        return await axios.delete(url+'/'+id+'/delete')
    }

    static async bid(id,user,price){
        return await axios.put(url+'/'+id,{user: user, currentPrice : price})
    }
}

export default PostServices;