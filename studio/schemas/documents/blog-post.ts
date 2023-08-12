import {BsFillBookmarkFill} from 'react-icons/bs'
import {Rule} from 'sanity'

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: BsFillBookmarkFill,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This will be used to generate the blog post title and the blog post slug',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      description: 'This will be used to generate the blog post overview (max. 200 characters)',
      validation: (Rule: Rule) => Rule.required().max(200),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The route for this blog post',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'portableText',
      description: 'The content of this blog post (will be rendered as rich text)',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
}
