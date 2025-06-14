import {Schema, model} from 'mongoose';

const castSchema =  new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: 0,
        max: 102
    },
    born: {
        type: String,
        required: [true, 'Date of birth is required!']
    },
    // nameInMovie: {
    //     type: String,
    //     required: [true, 'Name in movie is required!']
    // },
        imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!'],
    },
});

const Cast = model('Cast', castSchema);

export default Cast;