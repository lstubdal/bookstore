export default {
    title: 'Publisher',
    name: 'publisher',
    type: 'document',
    fields: [
        {
            title: 'Publisher name',
            name: 'name',
            type: 'string',
            validation: Rule => [ 
                Rule.requred().error('Missing name'),
                Rule.min(1).error('The name needs at least 1 character'),
                Rule.max(500).error('Names with more than 500 characters are too long')
             
        },
    ]
}