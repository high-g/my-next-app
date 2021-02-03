import Layout from '@/components/layout'

export default function Post() {
  return <Layout></Layout>
}

export async function getStaticPaths() {
  // idとしてとりうる値のリストを返す
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
