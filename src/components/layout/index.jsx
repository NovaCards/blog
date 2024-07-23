import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Helmet } from 'react-helmet'


const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>NovaCards: Blog</title>
        <meta name='description' content="The NovaCards.ai blog contains all the latest news and updates from the NovaCards team on AI, medical education, and our tools." />
        <link rel='canonical' href='https://blog.novacards.ai/' />
        <meta charset='utf-8' />
        <meta name='keywords' content='novacards, blog, novacards.ai' />
      </Helmet>
      <Navbar />
      <main className='container p-2 md:p-4 lg:p-8'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
