export const projects  =  {
    name: 'projects',
    type: 'document',
    title: 'Projects',
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
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true}
        },
    ]
}