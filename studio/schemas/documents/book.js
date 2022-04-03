export default {
    title: 'Book',
    name: 'book',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author'}] 
        },
        {
            title: 'Book cover (image)',
            name: 'bookCover',
            type: 'image',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        }, 
        {
            title: 'Genre',
            name: 'genre',
            type: 'reference',
            to: [{ type: 'genre' }]
        },
        {
            title: 'Publisher',
            name: 'publisher',
            type: 'reference',
            to: [{ type: 'publisher' }]
        },
        {
            title: 'Year of publication',
            name: 'yearOfPublication',
            type: 'number'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            // to calculate most popular on frontpage
            title: 'Total sold (set default 0, updated from /app/cart)',
            name: 'totalSold',
            type: 'number'
        }
    ]
}