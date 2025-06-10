import express from 'express';
import movieService from '../services/movieService.js';

const homeController =  express.Router();

//Config routes
homeController.get('/', (req, res) => {
const movies = movieService.getAll();
console.log(movies)

    res.render('home');
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;