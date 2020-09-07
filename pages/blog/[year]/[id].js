import React, { useContext, useEffect, useState } from 'react';

import AppMarkdown from '../../../blog-posts/2019/hooks-calculator.md';
import BlogPageStyles from '../../../components/styles/BlogPageStyles';
import CodeBlock from '../../../components/CodeBlock';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import Return from '../../../public/icons/return_dark.svg';
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
          <div className='hero-section'>
            <div className='hero-image-container'>
              <img className='hero-image' src={image} alt={`${title} background`} />
            </div>
            <div className='hero-text-container'>
              <h1 className='hero-text'>{title}</h1>
            </div>
          </div>
          <Link href='/blog'>
            <a className='back-link'>
              <img src={Return} alt='back arrow' />
              Back
            </a>
          </Link>
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
          <Link href='/blog'>
            <a className='back-link'>
              <img src={Return} alt='back arrow' />
              Back
            </a>
          </Link>
        </motion.div>
      </BlogPageStyles>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => {
    console.log(post.year);
    return {
      params: {
        year: `${post.year}`,
        id: post.slug,
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const { year, id } = params;
  const post = await import(`../../../blog-posts/${year}/${id}.md`);
  return {
    props: {
      document: post.default,
    },
  };
}
export default blogId;
