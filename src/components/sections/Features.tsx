import { featureItems } from '@/constants/features';

import FeatureCard from '../cards/FeatureCard';
import Section from '../layout/Section';

const Features = () => {
  return (
    <Section id='features' className='mb-10 sm:mb-16 space-y-6'>
      <div className='text-center space-y-2'>
        <h4 className='mx-auto w-fit py-2 font-spaceGrotesk text-2xl sm:text-3xl md:text-4xl border-b-1 border-gray-200'>
          <span className='text-orange'>Why</span> Choose Us?!
        </h4>

        <p className='max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto'>
          Enjoy live classes and explore open-source projects under the guidance
          of industry experts.
        </p>
      </div>

      <div className='flex flex-wrap flex-col sm:flex-row justify-center gap-2 sm:gap-4'>
        {featureItems.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageName={feature.imageName}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Features;
