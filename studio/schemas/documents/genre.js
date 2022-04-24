export default {
    title: 'Genre',
    name: 'genre',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => [ 
                Rule.requred().error('Missing title'),
                Rule.min(1).error('The title needs at least 1 character'),
                Rule.max(500).error('Titles with more than 500 characters are too long')
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200
            },
            validation: Rule => Rule.requred().error('Missing slug'),
        }
    ]
}