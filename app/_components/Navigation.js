import Link from 'next/link';

const navigationLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/cabins', label: 'Cabins' },
	{ href: '/about', label: 'About' },
	{ href: '/account', label: 'Account' },
];
export default function Navigation() {
	return (
		<ul>
			{navigationLinks.map(({ href, label }) => (
				<li key={`${href}${label}`}>
					<Link href={href}>{label}</Link>
				</li>
			))}
		</ul>
	);
}
