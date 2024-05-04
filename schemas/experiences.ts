export const experiences = {
  name: "experiences",
  type: "document",
  title: "Experiences",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "experiencesList",
      title: "Project List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
            {
              name: "data",
              type: "date",
              title: "Date",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt Text" }],
            },
          ],
        },
      ],
    },
  ],
};
