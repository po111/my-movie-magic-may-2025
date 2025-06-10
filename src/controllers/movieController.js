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

    res.render('details');
}))

export default movieController;