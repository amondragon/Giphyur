global.document = require('jsdom').jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};
