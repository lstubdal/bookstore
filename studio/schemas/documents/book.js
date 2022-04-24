export default {
    title: 'Book',
    name: 'book',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required().min(1).error('Book must have title')
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author'}] 
        },
        {
            title: 'Book cover (image)',
            name: 'cover',
            type: 'image',
            validation: Rule => Rule.required().min(1).error('Missing author')
        },
        
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            validation: Rule => [ 
                Rule.required().min(10).error('The title needs at least 10 character'),
                Rule.max(1000).error('Titles with more than 1000 characters are too long')
            ]
        }, 
        {
            title: 'Genre',
            name: 'genre',
            type: 'reference',
            to: [{ type: 'genre' }],
            validation: Rule => Rule.required().min(1).error('Missing genre')
        },
        {
            title: 'Publisher',
            name: 'publisher',
            type: 'reference',
            to: [{ type: 'publisher' }],
            validation: Rule => Rule.required().min(1).error('Missing publisher')
        },
        {
            title: 'Year of publication',
            name: 'yearOfPublication',
            type: 'number',
            validation: Rule => Rule.required().min(4).max(4).error('Missing published year. Format YYYY')
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: Rule => [
                Rule.required().min(1).error('Missing price'),
                Rule.required().positive().error('Price must be positive')
            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: Rule => Rule.required().error('Missing slug')
        },
        {
            title: 'Total sold',
            name: 'totalSold',
            type: 'number',
            description: 'Updated from website',
            readOnly: true
        }
    ]
}