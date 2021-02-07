import fetch from 'isomorphic-unfetch'

const BlogId = ({ blog }) => {
  return (
    <div>
      <h1>{blog.title}</h1>
      <div>
        {blog.tags.map((tag) => (
          <div key={tag.id}></div>
        ))}
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch('https://nextjs-jamstack.microcms.io/api/v1/blogs', key)
  const repos = await res.json()

  const paths = repos.contents.map((rep) => `/blogs/${repo.id}`)

  return {
    path,
    fallback: false,
  }
}

export const geeStaticProps = async (context) => {
  const id = context.params.id
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch('https://nextjs-jamstack.microcms.io/api/v1/blogs', key)

  const blog = await res.json()

  return {
    props: {
      blog: blog,
    },
  }
}
