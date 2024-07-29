import { twMerge } from 'tailwind-merge';

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        className,
        'mx-auto max-w-7xl py-2 sm:py-4 px-4 lg:px-8'
      )}
    >
      {children}
    </div>
  );
};

export default Container;
