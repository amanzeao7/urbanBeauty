import { defineField, defineType } from 'sanity'

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const pricing = defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Treatment Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Facials',     value: 'facial'  },
          { title: 'Massage',     value: 'massage' },
          { title: 'CACI',        value: 'caci'    },
          { title: 'Nails',       value: 'nails'   },
          { title: 'Lash & Brow', value: 'lash'    },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. 60 mins',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. £55',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'price' },
  },
})

// ─── Team ─────────────────────────────────────────────────────────────────────
export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Job Title',
      type: 'string',
      description: 'e.g. Senior Therapist & CACI Specialist',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
      description: 'Keep under 140 characters.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '1 = first, 2 = second, etc.',
      initialValue: 1,
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Client Name',
      type: 'string',
      description: 'First name + initial only e.g. Sarah M.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'treatment',
      title: 'Treatment & Status',
      type: 'string',
      description: 'e.g. CACI Facelift · Regular Client',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.required().min(1).max(5),
    }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'treatment' },
  },
})

// ─── Site Settings ────────────────────────────────────────────────────────────
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton — only one document of this type
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Where beauty becomes ritual',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'string',
    }),
    defineField({ name: 'aboutBody1', title: 'About Paragraph 1', type: 'text', rows: 4 }),
    defineField({ name: 'aboutBody2', title: 'About Paragraph 2', type: 'text', rows: 4 }),
    defineField({ name: 'statsYears',      title: 'Stat — Years',      type: 'string', initialValue: '12+' }),
    defineField({ name: 'statsTreatments', title: 'Stat — Treatments', type: 'string', initialValue: '30+' }),
    defineField({ name: 'statsRating',     title: 'Stat — Rating',     type: 'string', initialValue: '5★' }),
    defineField({ name: 'reviewsCount',    title: 'Reviews Count',     type: 'string', initialValue: '200+' }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({ name: 'address',     title: 'Address Line 1', type: 'string' }),
    defineField({ name: 'addressLine2',title: 'Address Line 2', type: 'string' }),
    defineField({ name: 'postcode',    title: 'Postcode',       type: 'string' }),
    defineField({ name: 'hoursWeekday',  title: 'Hours — Mon–Fri',  type: 'string', initialValue: 'Mon – Fri · 9am – 7pm' }),
    defineField({ name: 'hoursSaturday', title: 'Hours — Saturday', type: 'string', initialValue: 'Saturday · 9am – 6pm'  }),
    defineField({ name: 'hoursSunday',   title: 'Hours — Sunday',   type: 'string', initialValue: 'Sunday · 10am – 4pm'   }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'facebookUrl',  title: 'Facebook URL',  type: 'url' }),
    defineField({ name: 'tiktokUrl',    title: 'TikTok URL',    type: 'url' }),
  ],
  preview: {
    select: { title: 'heroHeadline' },
  },
})
