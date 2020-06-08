const hbs = require('hbs');

// Helpers
hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalize', str => {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
});


