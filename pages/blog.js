import BlogsStyles from '../components/styles/BlogsStyles';
import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { blogPosts } from '../public/data';
import Link from 'next/link';
const Blogs = () => {
  console.log(blogPosts);
  const posts = blogPosts.sort((a, b) => b.unix - a.unix);
  console.log(posts);
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Contact</title>
      </Head>
      <BlogsStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <h1>Blog</h1>
          {posts.map((post) => (
            <Link href={`/blog/${post.year}/${post.slug}`} key={post.slug}>
              <div className='post-container'>
                <img src={post.image} />
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
