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
      // main: {
      //   label: 'Content',
      //   type: 'area',
      //   options: {
      //     widgets: {
      //       '@apostrophecms/image': {},
      //       '@apostrophecms/video': {},
      //       '@apostrophecms/rich-text': {
      //         toolbar: [
      //           'styles',
      //           'bold',
      //           'italic',
      //           'strike',
      //           'link',
      //           'bullet_list',
      //           'ordered_list',
      //           'blockquote'
      //         ],
      //         styles: [
      //           {
      //             tag: 'p',
      //             label: 'Paragraph (P)'
      //           },
      //           {
      //             tag: 'h3',
      //             label: 'Heading 3 (H3)'
      //           }
      //         ]
      //       }
      //     }
      //   }
      // }
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
      // main: {
      //   label: 'Content',
      //   fields: [
      //     'main'
      //   ]
      // }
    }
  }
};
