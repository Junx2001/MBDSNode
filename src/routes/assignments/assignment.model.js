const { ObjectId } = require('bson');
let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    dateDeRendu: Date,
    nom: {
        type: String,
        required: true,
    },
    rendu: {
        type: Boolean,
        default: false
    },
    student_id: {
        type: ObjectId,
        required: true,
    },
    subject_id: {
        type: ObjectId,
        required: true,
    },
    note: Number,
    remarque: String
}, { collection: 'assignments' });

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
