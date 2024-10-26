import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../../app/page.jsx';

describe('Home Page', () => {
	it('should render', async () => {
		const PageComponent = await Page();
		render(PageComponent);

		const heading = screen.getByRole('heading', {
			level: 1,
			name: /Welcome to paradise/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
