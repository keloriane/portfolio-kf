export const projects = {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "projectList",
      title: "Project List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "projectTitle",
              type: "string",
              title: "Title",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt Text" }],
            },
            {
              name: "tag",
              type: "string",
              title: "Tag",
            },
            {
              name: "tech",
              title: "Technologies",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [{ name: "alt", type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
