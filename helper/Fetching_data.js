const { default: axios } = require("axios")

module.exports  = async function(){
    try {
      const options = {
        method: 'GET',
        headers: {
          'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
      };
  
      let Blogs
    
    
      await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', options).then((result)=>{
        Blogs = result.data.blogs
      })
  
      return {Blogs:Blogs, status:true}
      
    } catch (error) {
      console.error('An error occurred:', error);
      return{message:"Error While Fetching  Api", status:false}
    }
  }