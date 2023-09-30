
const lodash = require('lodash')
const Fetch_Blogs = require('../helper/Fetching_data')



module.exports = async function(req,res){

    console.log(req.query.query)

    const query = req.query.query

    const Fetch_data = await Fetch_Blogs()

    if(Fetch_data.status == false){
        res.send(Fetch_data.message)
      }
      else{

        const Blogs = Fetch_data.Blogs
        console.log(Blogs)


        //Checking if there is a query or not , if not then sending all the Blogs
        if (query){

            const Blogs_With_Query = lodash.filter(Blogs,(blog)=>lodash.includes(blog.title.toLowerCase(),query.toLowerCase()))
            console.log(Blogs_With_Query)
        
        res.send(Blogs_With_Query)
        }
        else{
            res.send(Blogs)
        }

      }

        
        
}

