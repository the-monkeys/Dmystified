import { faqData } from '@/constants/faq';

import Section from '../layout/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const FAQ = () => {
  return (
    <Section className='px-2 mb-10 sm:mb-16 sm:px-4 py-6 sm:py-8 bg-gray-50 space-y-6 rounded-lg'>
      <div className='text-center space-y-2'>
        <h4 className='mx-auto w-fit py-2 font-spaceGrotesk text-2xl sm:text-3xl md:text-4xl'>
          <span className='text-orange'>Questions?</span> We&apos;ve got answers
        </h4>

        <p className='max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto'>
          Explore our FAQ section for quick solutions to common queries and
          concerns
        </p>
      </div>

      <Accordion type='single' collapsible className='w-full sm:w-4/5 mx-auto'>
        {faqData.map((faq, index) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`} className='p-2'>
            <AccordionTrigger className='font-medium text-left'>
              {faq.query}
            </AccordionTrigger>

            <AccordionContent className='py-2 text-sm text-gray-800'>
              {faq.response}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
