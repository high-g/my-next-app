import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Blogs = ({ blogs }) => {
  console.log('blogs', blogs)

  return (
    <div>
      <h2>記事</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
            <a>
              <h2>{blog.title}</h2>
            </a>
          </Link>
          {blog.tags.map((tag) => (
            <div key={tag.id}>
              <span>{tag.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch(`https://nextjs-jamstack.microcms.io/api/v1/blogs`, key)
  const data = await res.json()

  return {
    props: {
      blogs: data.contents,
    },
  }
}

export default Blogs
