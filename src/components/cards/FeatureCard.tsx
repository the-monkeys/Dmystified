import Image from 'next/image';

const FeatureCard = ({
  title,
  description,
  imageName,
}: {
  title: string;
  description: string;
  imageName: string;
}) => {
  return (
    <div className='relative w-full sm:w-72 md:w-80 p-4 sm:p-6 flex flex-col items-center space-y-2 rounded-2xl shadow-lg shadow-gray-100 hover:shadow-none overflow-hidden'>
      <div className='absolute sm:static top-0 right-0 size-full sm:size-32'>
        <Image
          src={`./${imageName}.svg`}
          alt='Dmystified'
          width={150}
          height={150}
          className='w-full h-full opacity-15 sm:opacity-100'
        />
      </div>

      <h2 className='font-medium text-2xl text-center z-10'>{title}</h2>

      <p className='text-sm sm:text-base text-center z-10'>{description}</p>
    </div>
  );
};

export default FeatureCard;
