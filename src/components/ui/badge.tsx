import * as React from 'react';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-[2px] text-xs font-medium transition-colors focus:outline-none cursor-default',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 text-gray-50',
        secondary: 'bg-gray-200 text-gray-900',
        destructive: 'bg-red-500 text-gray-50',
        outline: 'border-1 border-gray-300',
        live: 'text-white bg-red-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
