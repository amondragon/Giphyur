const noop = () => {};

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
const ignoreExtensions = ['.jpg', '.jpeg', '.ico', '.png', '.svg'];
ignoreExtensions.forEach(ext => { require.extensions[ext] = noop });
