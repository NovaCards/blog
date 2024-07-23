import Link from 'next/link'

import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const { title, image, author, date, hideImage } = post.fields

  return (
    <>
      <h1 className='text-white'>{title}</h1>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-2'>
        <Link href={author.fields.website} className='text-white'>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </Link>
        <DateComponent dateString={date} className='text-sm text-gray-200' />
      </div>
      <div className={hideImage ? 'hidden' : 'block mb-8 md:mb-16 sm:mx-0'}>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          className={hideImage ? 'hidden' : 'block'}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent dateString={date} className='text-sm text-gray-200' />
      </div>
    </>
  )
}

export default PostHeader
