export default {
    title:  'Author',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Author must be filled in')
        },
    ]
}