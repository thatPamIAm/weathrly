require('babel-register')({
  presets: ['react', 'es2015'],
});

require('babel-polyfill');
const makeJQ = require('jquery');

global.document = require('jsdom').jsdom(
  "<head><meta charset='UTF-8><div id='application'></div></head>"
);

// if (!global.window.localStorage) {
//  localStorage = {
//    getItem() { return '[]'; },
//    setItem() {}
//  };
// }

global.window = document.defaultView;
global.navigator = window.navigator;
global.$ = global.jQuery = makeJQ(window);

