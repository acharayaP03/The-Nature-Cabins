import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { vi } from 'vitest';

// Mock next/image
vi.mock('next/image', () => ({
	default: (props) => {
		// eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
		return <img {...props} />;
	},
}));

// Mock next/link
vi.mock('next/link', () => ({
	default: (props) => {
		return <a {...props}>{props.children}</a>;
	},
}));

// Mock image imports
vi.mock('../public/bg.png', () => ({
	default: 'mocked-image-path',
}));
afterEach(() => {
	cleanup();
});
