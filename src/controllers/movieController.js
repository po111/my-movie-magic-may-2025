import express from 'express';
import movieService from '../services/movieService.js';
import req from 'express/lib/request.js';

const movieController = express.Router();

movieController.get('/create', (req,res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {

    const newMovie = req.body;

    //Save movie
    movieService.create(newMovie);

    //Redirect to home page
    res.redirect('/');
});

movieController.get('/:movieId/details', ((req, res) => {
    //Get movie id from params
    const movieId = req.params.movieId;

    //Get movie data
    const movie = movieService.getOne(movieId);

    //Prepare rating view data
    //const ratingStars = '&#x2605'.repeat(Math.floor(movie.rating));
    
    res.render('details', {movie });
}))

movieController.get('/search', (req, res) => {
    //Get querystring
    const filter = req.query;

    //Get All movies
    const movies = movieService.getAll(filter);
    res.render('search', {movies});

})



export default movieController;