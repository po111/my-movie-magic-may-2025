import express from 'express';
import movieService from '../services/movieService.js';

const homeController =  express.Router();

//Config routes
homeController.get('/', async (req, res) => {
const movies = await movieService.getAll();

    res.render('home', { movies });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;