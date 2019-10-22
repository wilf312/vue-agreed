module.exports = {
  title: 'ユーザー情報取得API',
  description: '/user/:id?q=1&index=2',
  request: {
    path: '/user/:id',
    method: 'GET',
    query: {
      q: '{:someQueryStrings}',
      index: '{:index}',
    },
    values: {
      id: 'yosuke',
      someQueryStrings: 'bye',
      index: 2,
    },
  },
  response: {
    headers: {
      'x-csrf-token': 'csrf-token',
    },
    body: {
      // hello yosuke bye
      message: '{:greeting} {:id} {:someQueryStrings}',
      // http://example.com/baz.jpg 
      image: '{:images[:index]}',
      themes: [
        // { name: 'green' }
        {
          name: '{:themes.0.name}'
        },
        // { name: 'blue' }, { name: 'red' }
        '{:themes.1-last}'
      ],
    },
    values: {
      greeting: 'hello',
      images: [
        'http://example.com/foo.jpg',
        'http://example.com/bar.jpg',
        'http://example.com/baz.jpg',
      ],
      themes: [
        {
          name: 'green',
        },
        {
          name: 'blue',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        },
        {
          name: 'red',
        }
      ]
    }
  },
}