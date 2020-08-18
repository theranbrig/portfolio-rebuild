import React, { useContext, useEffect, useState } from 'react';

import AppMarkdown from '../../../blog-posts/2019/hooks-calculator.md';
import BlogPageStyles from '../../../components/styles/BlogPageStyles';
import CodeBlock from '../../../components/CodeBlock';
import Layout from '../../../components/Layout';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

const blogId = ({ document }) => {
  return (
    <Layout>
      <Head>
        <title>theran.dev - blog</title>
      </Head>
      <BlogPageStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div>
            <ReactMarkdown source={document} renderers={{ code: CodeBlock }} escapeHtml={false} />
          </div>
        </motion.div>
      </BlogPageStyles>
    </Layout>
  );
};

blogId.getInitialProps = async ({ query }) => {
  const { year, id } = query;
  const post = await import(`../../../blog-posts/${year}/${id}.md`);

  return {
    document: post.default,
  };
};
export default blogId;
