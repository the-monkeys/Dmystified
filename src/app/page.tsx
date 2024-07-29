import React from 'react';

import WhatsAppButton, {
  WhatsAppButtonFloating,
} from '@/components/WhatsappSupport';
import Container from '@/components/layout/Container';
import ContactUs from '@/components/sections/ContactUs';
import Courses from '@/components/sections/Courses';
import FAQ from '@/components/sections/Faq';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';

export default function HomePage() {
  return (
    <Container className='bg-white'>
      <Hero />
      <Features />
      <Courses />
      <Pricing />
      <FAQ />
      <ContactUs />
      <WhatsAppButtonFloating />
    </Container>
  );
}
