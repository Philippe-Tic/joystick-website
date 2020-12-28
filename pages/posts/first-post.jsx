import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const FirstPost = () => (
  <>
    <Head>
      <title>Please don't go</title>
    </Head>
    <h1>First Post</h1>
    <Link href="/">Home</Link>
  </>
);

export default FirstPost;
