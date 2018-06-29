const hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[name]--[local]'
});
