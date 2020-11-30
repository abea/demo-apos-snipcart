module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      description: {
        label: 'Description',
        type: 'string',
        textarea: true,
        max: 250
      },
      price: {
        type: 'float'
      },
      photo: {
        label: 'Photo',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          max: 1
        }
      },
      sku: {
        label: 'SKU ID',
        help: 'Unique ID for identifying products',
        type: 'string',
        required: true // TODO: Populate this in event handler
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'price',
          'description',
          'photo',
          'sku',
          'visibility'
        ]
      }
    }
  }
};