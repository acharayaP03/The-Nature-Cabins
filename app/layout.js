import localFont from 'next/font/local';
import Navigation from './_components/Navigation';
import '@/app/_styles/globals.css';
import Logo from './_components/Logo';

export const metadata = {
	title: 'the Natures Cabins',
	description: 'Your next destination where you can relax and revive.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-primary-950 text-primary-100 min-h-screen'>
				<Logo />
				<Navigation />
				{children}
			</body>
		</html>
	);
}
