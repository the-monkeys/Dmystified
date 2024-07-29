import { twMerge } from 'tailwind-merge';

import Icon from '../icon';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const PricingCard = ({
  pricing,
}: {
  pricing: {
    title: string;
    price: string;
    description: string;
    features: string[];
    isRecommended: boolean;
  };
}) => {
  const { title, price, description, features, isRecommended } = pricing;

  return (
    <div className='group w-80 flex flex-col rounded-lg overflow-hidden'>
      <div
        className={twMerge(
          'p-4 text-white space-y-4',
          isRecommended
            ? 'bg-orange group-hover:bg-orange/90'
            : 'bg-gray-900 group-hover:bg-gray-800'
        )}
      >
        <p className='font-spaceGrotesk font-medium text-lg sm:text-xl text-right'>
          {title}
        </p>

        <div className='flex'>
          <p className='self-start text-lg'>$</p>
          <p className='font-spaceGrotesk text-3xl sm:text-4xl'>{price}</p>
          <p className='px-1 self-end text-sm text-gray-50'>/per month</p>
        </div>
      </div>

      <div className='flex-1 flex flex-col border-1 border-t-0 border-gray-200 rounded-b-lg'>
        <div className='flex-1 p-4 space-y-1'>
          <p className='font-medium'>Features</p>

          <p className='pt-1 text-sm text-gray-800'>{description}</p>

          <div className='py-2 space-y-2'>
            {features.map((feature, index) => {
              return (
                <div
                  className='flex items-center gap-2'
                  key={`${index}_${price}`}
                >
                  <Icon name='RiCheck' className='text-green-500' />

                  <p className='text-sm'>{feature}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        <Button
          type='button'
          variant='ghost'
          className='py-6 w-full rounded-none rounded-b-lg'
        >
          <Icon name='RiWallet3' className='mr-1' />
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
