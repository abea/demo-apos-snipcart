// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ],
    park: [
      {
        type: 'product-page',
        title: 'Shop',
        slug: '/shop',
        published: true,
        parkedId: 'shopPage'
      }
    ]
  }
};
