import {Rule} from 'sanity'

const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {title: 'Site Details', name: 'details', default: true},
    {title: 'SEO', name: 'seo'},
    {title: 'Advanced', name: 'advanced'},
  ],
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name',
      group: 'details',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website',
      name: 'siteURL',
      type: 'url',
      group: 'details',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'details',
    },
    {
      name: 'favicon',
      title: 'Site Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'details',
    },
    {
      title: 'Google Tag Manager (GTM)',
      description: 'To enable GTM enter your Container ID',
      name: 'gtmID',
      type: 'string',
      group: 'advanced',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },
  ],
}

export default siteSettings
