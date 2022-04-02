export default {
    title: 'Genre',
    name: 'genre',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
  /*       {
            // unødvendig 
            title: 'Books',
            name: 'books',
            type: 'array',
            of: [{ 
                type: 'reference',
                to: [{ type: 'book' }]
            }]
        } */
    ]
}