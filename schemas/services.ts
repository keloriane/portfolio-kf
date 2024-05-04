export const services  =  {
    name: 'services',
    type: 'document',
    title: 'Services',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'icons',
            title: 'Icons',
            type: 'array',
            of: [{type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string'}]}]
        }
    ]
}