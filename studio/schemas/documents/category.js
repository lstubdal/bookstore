export default {
    title:  'Category',
    name: 'category',
    type: 'document',
    fields: [
        {
            title: 'Category name',
            name: 'categoryName',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Missing name')
        },
        {
            title: 'Genres',
            name: 'genres',
            type: 'array',
            of: [{ 
                type: 'reference',
                to: [{ type: 'genre' }]
            }],
            validation: Rule => Rule.required().error('Missing genre')
            

        }
    ]
}