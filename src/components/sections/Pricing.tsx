import { pricingItems } from '@/constants/pricing';

import PricingCard from '../cards/PricingCard';
import Section from '../layout/Section';

const Pricing = () => {
  return (
    <Section id='pricing' className='mb-10 sm:mb-16 space-y-6'>
      <div className='text-center space-y-2'>
        <h4 className='mx-auto w-fit py-2 font-spaceGrotesk text-2xl sm:text-3xl md:text-4xl border-b-1 border-gray-200'>
          <span className='text-orange'>Pricing</span> Options
        </h4>

        <p className='max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto'>
          Select the plan that fits you best
        </p>
      </div>

      <div className='flex justify-evenly flex-wrap gap-4'>
        {pricingItems.map((pricing) => {
          return <PricingCard key={pricing.id} pricing={pricing} />;
        })}
      </div>
    </Section>
  );
};

export default Pricing;
