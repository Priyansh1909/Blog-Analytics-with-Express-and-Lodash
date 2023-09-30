const lodash = require('lodash')
const Fetch_Blogs = require('../helper/Fetching_data')


module.exports = async function (req, res) {


  // Fetching Given API with Caching
    const Get_Blogs = lodash.memoize(Fetch_Blogs)

    const Blogs = await Get_Blogs()

    console.log(Blogs)

    if(Blogs.status == false){
      res.send(Blogs.message)
    }
    else{
      const Analysis_Results = lodash.memoize(Analysis_Result_Mem)

      const Blogs_data = await Analysis_Results(Blogs.Blogs)

      console.log(Blogs_data)
  
      res.send(Blogs_data)

    }




}





const Analysis_Result_Mem = async function(Blogs){
  try {


    // Total Blogs - Working
    

    const Total_Number_of_Blogs = lodash.size(Blogs)
    // console.log("lodash size: ", Total_Number_of_Blogs)



    // Longest Blog Title - Working

    const Longest_Blog_Title = lodash.maxBy(Blogs, (blog) => blog.title.length)
    // console.log('Lodash Title', Longest_Blog_Title.title)



    // Blogs WIth Title That Includes Privacy - Working 
    const Blogs_With_Privacy_Title = lodash.filter(Blogs, (blog) => lodash.includes(blog.title.toLowerCase(), 'privacy'))

    const Number_Of_Title_With_Privacy = lodash.size(Blogs_With_Privacy_Title)
    // console.log("New Arrays: ", Number_Of_Title_With_Privacy)



    // Blogs With No Duplicate - Working

    const Blogs_With_No_Duplicate = lodash.uniqBy(Blogs, 'title')
    const Blogs_Title_No_Duplicates = Blogs_With_No_Duplicate.map((blog) => blog.title)
    // console.log(Blogs_Title_No_Duplicates)

    return({ "Total number of blogs": Total_Number_of_Blogs, "The title of the longest blog": Longest_Blog_Title.title, 'Number of blogs with "privacy" in the title': Number_Of_Title_With_Privacy, "An array of unique blog titles": Blogs_Title_No_Duplicates })

  } catch (error) {
    console.log(error.message)
    return("Error in analysis or search process.")

  }


}