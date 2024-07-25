import RichText from '../RichText'

const PostBody = ({ post }) => {
  const { content } = post.fields

  return (
    <div id="post-body" className='mx-auto !text-white'>
      <RichText content={content} />
    </div>
  )
}

export default PostBody
