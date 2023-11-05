import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import ExternalLink, { ExternalLinkProps } from './ExternalLink';

const config: ExternalLinkProps = {
  baseUrl: 'http://example.com',
  id: '1',
  symbol: 'TEST'
}

describe('ExternalLink', () => {
  it('renders a link', () => {
    const { getByRole } = render(<ExternalLink {...config} />)
    const link = getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('shows symbol', () => {
    const { getByRole } = render(<ExternalLink {...config} />)
    const link = getByRole('link');
    expect(link).toHaveTextContent('TEST');
  });

  it('renders correct href', () => {
    const { getByRole } = render(<ExternalLink {...config} />)
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'http://example.com/1')
  });
});
