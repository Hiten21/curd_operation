const mongoose=require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,'Please add a title'],
        unique: true,
        // trim: true,
        maxlength:[15,'title can not be more then 15 words']
    },
    description:{
        type: String,
        required: true,
        maxlength:[100,'Can not be more then 100 words']

    }
})

module.exports=mongoose.models.Note || mongoose.model('Note',NoteSchema); 