import Link from 'next/link';
import { auth } from '@/app/_lib/auth';
const navigationLinks = [
	{ href: '/cabins', label: 'Cabins' },
	{ href: '/about', label: 'About' },
];

export default async function Navigation() {
	const session = await auth();
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
				<li>
					{session?.user?.image ? (
						<Link
							href='/account'
							className='hover:text-accent-400 transition-colors flex items-center gap-4'
						>
							<img
								src={session.user.image}
								alt={session.user.email}
								className='w-8 h-8 rounded-full'
								referrerPolicy='no-referrer'
							/>
							<span>Guest area</span>
						</Link>
					) : (
						<Link href='/account' className='hover:text-accent-400 transition-colors'>
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
