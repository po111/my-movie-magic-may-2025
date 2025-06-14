import Cast from '../models/cast.js';

export default {
    getAll() {
        return Cast.find();
    },
    create(castData) {
        return Cast.create(castData);
    }
    
};