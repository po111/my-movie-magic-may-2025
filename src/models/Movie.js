import {Schema, model} from 'mongoose';

const maxYearAllowed = new Date().getFullYear()+5;

const movieSchema =  new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!']
    },
    director: {
        type: String,
        required: [true, 'Director is required!']
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: 1920,
        max: [ maxYearAllowed, `Year cannot be further than ${maxYearAllowed}!`]
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required!'],
        min: [ 1, 'Rating is between 1 and 10'],
        max: [10, 'Rating is between 1 and 10'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [1000, 'Description is too long!']
        
},    });

const Movie = model('Movie', movieSchema);

export default Movie;

//Old - for working with file instead of DB

// import fs from 'node:fs/promises';
// import{v4 as uuid} from 'uuid';

// const moviesJson = await fs.readFile('./src/database.json');
// export const movies = JSON.parse(moviesJson);


// export default class Movie {
//     constructor(data) {
//         this.data =  data;
//     }
    
//     async save() {
                
//         //Set unique id
//         this.data.id= uuid();

//         // //Convert rating from string to number
//         this.data.rating = Number(this.data.rating);

//         movies.push(this.data);

//         await fs.writeFile('./src/database.json', JSON.stringify(movies, null, 4));

//         return this.data;
//     }
// }