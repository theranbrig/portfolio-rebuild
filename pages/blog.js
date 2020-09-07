import BlogsStyles from '../components/styles/BlogsStyles';
import Layout from '../components/Layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { blogPosts } from '../public/data';
import { motion } from 'framer-motion';

const Blogs = () => {
  const posts = blogPosts.sort((a, b) => b.unix - a.unix);

  return (
    <Layout>
      <NextSeo
        title='Theran Brigowatz | Blog'
        description='A collection of development blog posts.'
      />
      <BlogsStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <h1>Blog</h1>
          <p className='dev'>
            All blog posts can also be found over at <a href="https://dev.to/theranbrig" target='_blank' rel='noopener noreferrer'>dev.to</a>
          </p>
          {posts.map((post) => (
            <Link href='/blog/[year]/[id]' as={`/blog/${post.year}/${post.slug}`} key={post.slug}>
              <div className='post-container'>
                <img src={post.image} alt={post.title} />
                <div className='post-description'>
                  <h2>{post.title}</h2>
                  <div>
                    <p>{post.description}</p>
                    <p className='date'>{post.dateString}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </BlogsStyles>
    </Layout>
  );
};

export default Blogs;
