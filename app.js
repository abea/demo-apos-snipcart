const path = require('path');

require('apostrophe')({
  shortName: 'fake-goods',

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/@apostrophecms/assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here to turn them on: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    '@apostrophecms/template': {
      options: {
        viewsFolderFallback: path.join(__dirname, 'views')
      }
    },

    // Custom CSS classes for standard apostrophe widgets
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'fg-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'fg-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'fg-video'
      }
    },
    // Manages apostrophe's overall asset pipeline
    '@apostrophecms/asset': {
      // When not in production, refresh the page on restart
      options: {
        refreshOnRestart: true
      }
    },

    '@apostrophecms/express': {
      options: {
        session: {
          // If this still says `undefined`, set a real secret!
          secret: undefined
        }
      }
    },

    // A home for our own project-specific javascript and SASS assets
    asset: {},
    'default-page': {},
    product: {},
    'product-page': {}

  }
});
