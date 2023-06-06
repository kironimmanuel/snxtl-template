import { Rule } from 'sanity';

const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name.',
    },
    {
      title: 'Default Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers.',
      validation: (Rule: Rule) =>
        Rule.max(50).warning(
          'Longer titles may be truncated by search engines'
        ),
    },
    {
      title: 'Default Meta Description',
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      description: 'Description for search engines.',
      validation: (Rule: Rule) =>
        Rule.max(150).warning(
          'Longer descriptions may be truncated by search engines'
        ),
    },
    {
      name: 'keywords',
      title: 'Site Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'favicon',
      title: 'Site Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Site URL',
      type: 'url',
    },
  ],
};

export default siteSettings;
