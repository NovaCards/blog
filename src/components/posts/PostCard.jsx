import Link from 'next/link'
import Avatar from '../ui/Avatar'
import DateComponent from '../ui/DateComponent'
import ContentfulImage from '../ui/ContentfulImage'

const PostCard = ({ post }) => {
  const { title, slug, excerpt, image, author, date } = post.fields

  return (
    <li className='rounded-md overflow-hidden shadow-md bg-black hover:border-sky-200 hover:bg-zinc-950 border border-gray-400'>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className='mb-2'>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={image.fields.file.url}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl mb-1 leading-snug text-white font-bold'>{title}</h3>
          <div className='text-xs mb-4 text-gray-400'>
            <DateComponent dateString={date} />
          </div>
          <p className='text-xs lg:text-sm text-base mb-4'>{excerpt}</p>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      </Link>
    </li>
  )
}

export default PostCard
