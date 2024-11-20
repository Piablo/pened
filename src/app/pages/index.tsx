// pages/index.js

import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import TrustIndicators from '@/components/TrustIndicators/TrustIndicators';

export default function HomePage() {
  return (
    <MainLayout>
      <Head>
        <title>Fast, Secure Online Payments for South Africa | Your Company</title>
        <meta
          name="description"
          content="Your Company offers trusted payment solutions for South African businesses. Secure, fast, and designed for growth."
        />
        <meta
          name="keywords"
          content="online payments, South Africa, secure payments, fast transactions, payment gateway"
        />
      </Head>
    </MainLayout>
  );
}
