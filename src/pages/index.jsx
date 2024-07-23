import { client } from '@/lib/contentful/client'
import PostCard from '@/components/posts/PostCard'


const Posts = ({ posts }) => {
  return (
    <section className='section bg-zinc-950'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5'>
          {posts.map((post, i) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'blog' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts
