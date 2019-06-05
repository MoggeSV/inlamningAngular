const db = require('mongoose');

const userSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    firstname:      { type: String, required: true },
    middlename:      { type: String, required: false },
    lastname:       { type: String, required: true },
    birthday:       { type: String, required: true },

    postal_addressline:    { type: String, required: true },
    postal_zipcode:        { type: String, required: true },
    postal_city:           { type: String, required: true },
    postal_country:           { type: String, required: true },

    billing_addressline:    { type: String, required: true },
    billing_zipcode:        { type: String, required: true },
    billing_city:           { type: String, required: true },
    billing_country:           { type: String, required: true },


    email:          { type: String, required: true, unique: true},
    password:       { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("User", userSchema);

