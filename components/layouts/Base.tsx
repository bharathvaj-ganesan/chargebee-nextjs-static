import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { PageMeta } from '../../types';

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

export default function BaseLayout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
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
