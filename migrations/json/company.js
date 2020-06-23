var fs = require('fs');
var companyBase = JSON.parse(fs.readFileSync('users.json', 'utf8'));

companyBase.forEach((entry, index) => {
    console.log("INSERT INTO company(company_name, company_cphrase, company_bs)\n"+
                "VALUES('"+
                entry.company.name+"', '"+
                entry.company.catchPhrase+"', '"+
                entry.company.bs+"');\n"
               )
})
