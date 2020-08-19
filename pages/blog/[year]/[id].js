import React, { useContext, useEffect, useState } from 'react';

import AppMarkdown from '../../../blog-posts/2019/hooks-calculator.md';
import BlogPageStyles from '../../../components/styles/BlogPageStyles';
import CodeBlock from '../../../components/CodeBlock';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../../../public/data';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const blogId = ({ document }) => {
  const router = useRouter();
  const post = blogPosts.filter((post) => post.slug === router.query.id);
  const { title, image, alt, description, year, slug } = post[0];
  return (
    <Layout>
      <NextSeo
        title={`Theran Brigowatz | ${title}`}
        description={description}
        openGraph={{
          url: `https://theran.dev/blog/${year}/${slug}`,
          images: [{ url: image, alt }],
        }}
      />
      <BlogPageStyles>
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}>
          <div class='hero-section'>
            <div class='hero-image-container'>
              <img class='hero-image' src={image} alt='sitting in a hammock' />
            </div>
            <div class='hero-text-container'>
              <h1 class='hero-text'>{title}</h1>
            </div>
          </div>
          <p style={{ textAlign: 'right' }}>Author: Theran Brigowatz</p>
          <ReactMarkdown source={document} renderers={{ code: CodeBlock }} escapeHtml={false} />
          <p>
            Check out more of my articles, projects, and other content at{' '}
            <Link href='/blog'>
              <a>theran.dev</a>
            </Link>{' '}
            or on{' '}
            <a href='https://twitter.com/wellBuilt' target='_blank' rel='noopener noreferrer'>
              twitter
            </a>
            .
          </p>
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
