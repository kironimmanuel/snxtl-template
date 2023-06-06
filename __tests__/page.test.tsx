import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Component', () => {
  it('renders the page content', () => {
    render(<Home />);

    const headingElement = screen.getByText(/SNXTL Template/i);
    expect(headingElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      /Blending Next.js, Tailwind CSS, TypeScript, and Sanity./i
    );
    expect(descriptionElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link', {
      name: /Jump to your sanity studio/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/admin');
  });
});
