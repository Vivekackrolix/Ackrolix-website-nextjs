import Head from 'next/head';
import React from 'react';
import Header from '../../components/Common/Header';
import Heading from '../../components/Common/Heading';
import Bloglist from '../../components/Blogs/BlogList';
import Footer from '../../components/Common/Footer';
import { allPosts, Post } from 'contentlayer/generated';

export const getStaticPaths = () => {
  const paths = allPosts.map(post => `/blogs/${post.slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = context => {
  const slug = context.params.slug;
  const post = allPosts.find(post => post.slug === slug);
  return { props: { post } };
};

export default function Blog({ post }) {
  return (
    <div>
      <Header />
      <Head>
        <title>{post?.title}</title>
      </Head>
      <div
        className=""
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Heading titletext="Blog" title="Blog" subtext={post?.description} />
      </div>
      <div className="px-5 [&_.prose]:max-w-[100ch] container-ack md:py-12 md:px-0">
        <article
          class="prose  lg:prose-xl
            [&_h1]:text-4xl [&_h2]:text-2xl [&_h3]:text-xl [&_h4]:text-lg [&_h5]:text-base [&_h6]:text-sm
        "
        >
          <div dangerouslySetInnerHTML={{ __html: post?.body?.html }} />
        </article>
      </div>

      <Footer />
    </div>
  );
}
