export interface Project {
  projectTitle: string;
  image: string;
  description?: string;
  tag?: string;
  tech: [{ url: string; alt: string }];
  slug: { current: string };
  title?: string;
  projectUrl: string;
}
