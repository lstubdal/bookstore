import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import book from './documents/book'
import genre from './documents/genre'
import author from './documents/author'
import publisher from './documents/publisher'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    book,
    genre,
    author,
    publisher
  ]),
})
