var schemas = {
    user: {
        name:        null,
        username:    null,
        email:       null,
        address:     null,
        phone:       null,
        website:     null,
        company:     null
    },
    company: {
        name:        null,
        catchPhrase: null,
        bs:          null
    },
    address: {
        street:      null,
        suite:       null,
        city:        null,
        zipcode:     null,
        geo: {
            lat:     null,
            lng:     null
        }
    },
    post: {
        userId:      null,
        title:       null,
        body:        null
    },
}

module.exports.schemas = schemas;

/**
   Return only desired/allowed fields
   from data, according to schema.
**/
module.exports.sanitize = function(schema, data) {
    // If data is undefined|null|false,
    // initialize and empty object for it
    data = data || {};

    // Return only desired fields
    return _.pick(_.defaults(data, schema), _.keys(schema));
}
