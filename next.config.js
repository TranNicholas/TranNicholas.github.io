const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    [withNextra(), {}],

    {images: {
            loader: 'akamai',
            path: '/',
    }}

]);