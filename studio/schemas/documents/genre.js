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
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200
            }
        }
    ]
}