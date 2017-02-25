require('babel-register')({
  presets: ['react', 'es2015'],
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(
  "<head><meta charset='UTF-8><div id='application'></div></head>"
);

// if (!global.window.localStorage) {
//  localStorage = {
//    getItem() { return '[]'; },
//    setItem() {}
//  };
// }

global.window = document.defaultView // if we have to go to the window (Event bubbling, referencing the window)
global.navigator = window.navigator // if something is paginated this allows us to go from page to page