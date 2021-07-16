const { Movie } = require("../movie/movie.model");
const { disconnect } = require("../db/connection");

exports.add = async (entryObject) => {
    try {
        const movie = new Movie(entryObject);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error);
    }
    disconnect();
}
exports.list = async(entryObject) =>{
    try {
        const movie = new Movie (entryObject);
            if (error) return console.error(error);
            console.log(movie)
        }
                
    } catch (error) {
        console.log(error)
    }

exports.update = async(titleInput) => {
    let query = { title: titleInput };
    try {
        Movie.findOneAndUpdate(query, { status : true } , function (err, movie){
            if (err) handleError(err);
            console.log(`You have set the status of ${movie.title} to finished`)
        })
    } catch (error) {
        console.log(error)        
    }
}
exports.remove = async(titleInput) =>{
    let query = { title: titleInput };
    try {
        Movie.findOneAndRemove(query, function (err, movie){
            if (err) return handleError(err);
            console.log(`${movie.title} has been removed from the list.`)
        })
    } catch (error) {
        console.log(error)        
    }
};