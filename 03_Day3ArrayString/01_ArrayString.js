var countries=["INDIA","CANADA","RUSSIA","AMERICA","ITALI","ROME"];


countries.forEach(country=>console.log(country.toLowerCase()+" : "+country.length));

var ctr=countries.filter(country=> country.includes('R'));

    console.log(ctr);


    var emails=['ratna@gmail.com','ratnapatel@rediffmail.com','ratnappatel@yahoo.com'];

    var gmails=emails.filter(e=>e.includes('gmail'));

    console.log(gmails);