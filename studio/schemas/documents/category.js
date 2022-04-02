export default {
    title:  'Category',
    name: 'category',
    type: 'document',
    fields: [
        {
            title: 'Category name',
            name: 'categoryName',
            type: 'string'
        },
        {
            title: 'Genres',
            name: 'genres',
            type: 'array',
            of: [{ 
                type: 'reference',
                to: [{ type: 'genre' }]
            }]
            

        }
    ]
}