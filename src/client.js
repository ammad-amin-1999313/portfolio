import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'xno1idta',
  dataset: 'production',
})
