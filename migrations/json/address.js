var fs = require('fs');
var addressBase = JSON.parse(fs.readFileSync('users.json', 'utf8'));

addressBase.forEach((entry, index) => {
    console.log("INSERT INTO address(address_street, address_suite, address_city, address_zcode, address_geolat, address_geolong)\n"+
                "VALUES('"+
                entry.address.street+"', '"+
                entry.address.suite+"', '"+
                entry.address.city+"', '"+
                entry.address.zipcode+"', '"+
                entry.address.geo.lat+"', '"+
                entry.address.geo.lng+"');\n"
               )
})
