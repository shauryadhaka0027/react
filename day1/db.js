const mongoose=require("mongoose")

   const main=async ()=>{
    const connection= await mongoose.connect("mongodb://127.0.0.1:27017/movie");
    MovieModel.insertMany([
   {
     "Title": "The Lion King",
     "Year": "2019",
     "Runtime": "118 min"
    
   },
   {
     "Title": "Mowgli: Legend of the Jungle",
     "Year": "2018",
     "Runtime": "104 min"
     
   },
   {
     "Title": "Doctor Strange",
     "Year": "2016",
     "Runtime": "115 min"
     
   },
   {
     "Title": "Dhoom",
     "Year": "2014",
     "Runtime": "101 min"
     
   },
   {
     "Title": "The Dhoni",
     "Year": "2004",
     "Runtime": "123 min"
   }
 ])
   }
 
  

const movieSchme=mongoose.Schema({
    Title:String,
    Year:Number,
    Runtime:String,
    
})
const MovieModel=mongoose.model("movie",movieSchme)
module.exports={main,MovieModel}

