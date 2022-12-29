import Head from 'next/head';
import { ReactNode } from 'react';
import { PageMeta } from '../../types';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function BaseLayout({ children, meta: pageMeta }: Props) {
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'A free Next.js TypeScript subscription page template for SaaS products, online services and more.',
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
      </Head>
      <main>{children}</main>
    </>
  );
}
