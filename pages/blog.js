import BlogPageStyles from '../components/styles/ContactPageStyles';
import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Theran Brigowatz | Contact</title>
      </Head>
      <BlogPageStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <h1>Some Blog Stuff</h1>
        </motion.div>
      </BlogPageStyles>
    </Layout>
  );
};

export default Contact;
