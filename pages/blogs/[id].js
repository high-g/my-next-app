import fetch from 'isomorphic-unfetch'

const BlogId = ({ blog }) => {
  return (
    <>
      <h1>{blog.title}</h1>
      <div>aaa</div>
    </>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch('https://nextjs-jamstack.microcms.io/api/v1/blogs', key)
  const data = await res.data

  return {
    params: {
      blog,
    },
  }
}

export const geeStaticProps = async () => {}
