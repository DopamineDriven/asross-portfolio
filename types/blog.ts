import Author from 'types/author'

interface Blog {
    slug: string
    title: string
    date: string
    coverImage: string
    author: Author
    excerpt: string
    ogImage: {
      url: string
    }
    content: string
}
  

export default Blog;