const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const astroSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    proximity: {
        type: String,
    },
    notes: {
        type: String
    },
    seen: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model('Astro', astroSchema);