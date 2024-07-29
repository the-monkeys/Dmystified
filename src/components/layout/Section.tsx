import { twMerge } from 'tailwind-merge';

const Section = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={id} className={twMerge(className)}>
      {children}
    </div>
  );
};

export default Section;
