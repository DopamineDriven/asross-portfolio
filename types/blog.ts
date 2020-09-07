import Author from 'types/author'

interface Blog {
    slug: string
    title: string
    date: string
    coverImage: string
    excerpt: string
    ogImage: {
      url: string
    }
    content: string
}
  

export default Blog;