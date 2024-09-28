// Use this file to add custom webpack configuration (react-app-rewired is needed)
// File must be .js file, not .ts
const path = require('path');

module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@features': path.resolve(__dirname, 'src/features'),
        '@lib': path.resolve(__dirname, 'src/lib')
    };
    return config;
};
