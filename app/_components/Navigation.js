import Link from 'next/link';

const navigationLinks = [
	{ href: '/cabins', label: 'Cabins' },
	{ href: '/about', label: 'About' },
	{ href: '/account', label: 'Account' },
];

export default function Navigation() {
	return (
		<nav className='z-10 text-xl'>
			<ul className='flex gap-16 items-center'>
				{navigationLinks.map(({ href, label }) => (
					<li key={`${href}${label}`}>
						<Link href={href} className='hover:text-accent-400 transition-colors'>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
