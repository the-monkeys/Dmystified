import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        style={{
          fontSize: '32px',
          fontWeight: '600',
        }}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        style={{
          fontSize: '28px',
          fontWeight: '600',
        }}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        style={{
          fontSize: '24px',
          fontWeight: '600',
        }}
        {...props}
      />
    ),
    h4: (props) => (
      <h2
        style={{
          fontSize: '20px',
          fontWeight: '600',
        }}
        {...props}
      />
    ),
    h5: (props) => (
      <h4
        style={{
          fontSize: '18px',
          fontWeight: '600',
        }}
        {...props}
      />
    ),
    p: (props) => (
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
        }}
        {...props}
      />
    ),
    ul: (props) => (
      <ul style={{ margin: '10px 0', padding: '0 0 0 10px' }} {...props} />
    ),
    ol: (props) => (
      <ol style={{ margin: '10px 0', padding: '0 0 0 10px' }} {...props} />
    ),
    li: (props) => (
      <li
        style={{
          padding: '2px 0',
          margin: '6px 0',
          listStyle: 'number inside',
        }}
        {...props}
      />
    ),
    ...components,
  };
}
