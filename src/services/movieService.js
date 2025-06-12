import {v4 as uuid} from 'uuid';
import Movie, { movies} from '../models/Movie.js';


export default {
     getAll(filter = {}) {

        let result = movies.slice();

        if(filter.search) {
            result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));           
        }

        if(filter.genre) {
            result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
             //result = result.filter(movie => movie.genre.localeCompare(filter.genre, undefined, {sensitivity: 'accent'})==0);
        }

        if(filter.year) {
            result = result.filter(movie => movie.year===filter.year);
        }
    return result;
     },
     create(movieData){

        const movie = new Movie(movieData);
        //Set unique id
        //movieData.id= uuid();
        
        //Convert rating from string to number
        //movieData.rating = Number(movieData.rating);

       return movie.save();
     },
     getOne(movieId) {
        const movie = movies.find(movie => movie.id===movieId);

        return movie;
     }, 
    
}