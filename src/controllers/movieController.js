import express from 'express';

const movieController = express.Router();

movieController.get('/create', (req,res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {

    console.log(req.body);

    res.end();
});

export default movieController;