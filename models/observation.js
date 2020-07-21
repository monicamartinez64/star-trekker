const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const observationSchema = new Schema ({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    location: {
        type: String
    },
    notes: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model('Observation', observationSchema);