import express from 'express';
import movieService from '../services/movieService.js';
import req from 'express/lib/request.js';
import castService from '../services/castService.js';

const movieController = express.Router();

movieController.get('/create', (req,res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {

    const newMovie = req.body;

    //Save movie
    await movieService.create(newMovie);

    //Redirect to home page
    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    //Get movie id from params
    const movieId = req.params.movieId;

    //Get movie data
    const movie = await movieService.getOne(movieId);

    //Prepare rating view data
    //const ratingStars = '&#x2605'.repeat(Math.floor(movie.rating));
    
    res.render('movie/details', {movie });
});

movieController.get('/search', async (req, res) => {
    //Get querystring
    const filter = req.query;
    
    //Get All movies
    const movies = await movieService.getAll(filter);
    res.render('search', {movies, filter});

});

movieController.get('/:movieId/attach', async (req, res) => {
  const movieId = req.params.movieId;

//Get movie by Id
  const movie = await movieService.getOne(movieId);

  //Get all casts
  const casts = await castService.getAll();
  
  //Pass casts to template
  res.render('movie/attach', { movie, casts} );
})

movieController.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;

    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    return redirect(`movies/${movieId}/details`);
})



export default movieController;