import { twMerge } from 'tailwind-merge';

export const H1 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h1
      className={twMerge(
        'font-spaceGrotesk font-medium text-2xl sm:text-3xl md:text-4xl',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2
      className={twMerge(
        'font-spaceGrotesk font-medium text-xl sm:text-2xl md:text-3xl',
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h3
      className={twMerge(
        'font-medium text-lg sm:text-xl md:text-2xl',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h4 className={twMerge('font-medium text-lg sm:text-xl', className)}>
      {children}
    </h4>
  );
};
